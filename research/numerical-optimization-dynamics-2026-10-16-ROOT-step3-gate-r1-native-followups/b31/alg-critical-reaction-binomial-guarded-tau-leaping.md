---
id: alg-critical-reaction-binomial-guarded-tau-leaping
kind: algorithm
title: "Critical-reaction binomial guarded tau-leaping"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 4
deps:
  - def-reaction-network-propensity-system-and-generator
  - alg-gillespie-direct-method-for-reaction-networks
  - def-bernoulli-and-binomial-random-variables
  - def-countable-choice
  - def-dependent-choice
  - thm-countable-product-of-probability-spaces
  - thm-finite-state-gillespie-and-next-reaction-exactness
justified_by: []
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Tiejun Li, Lecture 21: Application in chemical reaction kinetics, Applied Stochastic Analysis course notes"
      url: "https://www.math.pku.edu.cn/teachers/litj/notes/appl_stoch/lect21.pdf"
      locator: "§3.3, Algorithm 1 and the finite-size variance warning, PDF pp. 4–5."
    - title: "Daniel T. Gillespie, Approximate accelerated stochastic simulation of chemically reacting systems"
      url: "https://moodle2.units.it/pluginfile.php/293921/mod_resource/content/1/Gillespie_2001_Approximate_accelerated_stochastic_simulation_of_chemically_reacting_systems.pdf"
      locator: "§V, tau selection and the switch to SSA for sufficiently small leaps, journal pp. 1722–1724 / PDF pp. 7–9."
verification:
  precheck: pending
---

## Definition

**Inputs.** A finite state reaction system
[[def-reaction-network-propensity-system-and-generator]] with nonzero jump
vectors, initial state $x_0\in E$, horizon $T>0$, maximum leap
$\tau_{\max}>0$, critical threshold $n_c\in\mathbb N$, finite step budget
$B$ that is a nonnegative integer, and independent ideal random inputs for
the procedure. Use a fresh independent direct-method stream on every critical
SSA call. Also use mutually independent unit-uniform streams
$U_{q,j,r}\sim\operatorname{Unif}[0,1]$, independent of all SSA streams, for
leap indices $q$, channels $j$, and positive trial indices $r=1,2,\ldots$. A
binomial draw with parameters $(m_j,p_j)$ is the number of the first $m_j$
entries in its stream that are less than $p_j$. The countable product of these input laws
exists under Countable Choice and Dependent Choice by
[[thm-countable-product-of-probability-spaces]]. The first-event law of the
critical SSA subroutine is the one in
[[thm-finite-state-gillespie-and-next-reaction-exactness]]. For a state $x$
and channel $j$, define its admissible firing
capacity
$$\mathbb N_0:=\{0,1,2,\ldots\},\qquad m_j(x):=\max\{m\in\mathbb N_0:x+r\nu_j\in E \text{ for every integer }r\in\{0,\ldots,m\}\}.$$
Finiteness of $E$ and $\nu_j\ne0$ make this maximum finite. Let
$C(x)=\{j:m_j(x)\le n_c\}$ be the critical set. When $C(x)\ne\varnothing$,
hold $C(x)$ fixed and form the finite reaction system on $E$ using only those
channels, with their original propensities. If $C(x)=\varnothing$, do not
form a restricted system and define the critical result to be no event. In
the nonempty case, the critical SSA subroutine runs the direct Gillespie
method on this restricted system with event budget one and horizon $\tau$;
it returns its first event $(s,j_*)$ if it occurs strictly before $\tau$,
where $0<s<\tau$, and otherwise returns no event.

**Output.** The recorded states at accepted leap endpoints, with
piecewise-constant interpolation, and a status in {**completed**,
**absorbed**, **invalid-state**, **inconclusive**,
**step-size-infeasible**, **critical-interface-required**}. A noncompleted
step-size, interface, or budget failure returns the current path prefix.
Absorption and invalid-state handling record the held state through $T$.

**Procedure.** Set $t=0$, $x=x_0$, step counter $q=0$,
recorded path $P=[(0,x_0)]$, and status **completed**.

1. If $t=T$, return $P$ with status **completed**. If $x\notin E$, append
   $(t,x)$ to $P$ if needed, append $(T,x)$ if $t<T$, and return $P$ with
   status **invalid-state**. If $q=B$ before $T$, return the current path
   prefix with status **inconclusive**. If $\lambda(x)=0$, hold
   $x$ fixed through $T$, append $(T,x)$ to $P$ if needed, and return $P$
   with status **absorbed**.
2. Compute $C(x)$ and
   $$\tau=\min\!\left(T-t,\tau_{\max}, \min_{\substack{j\notin C(x)\\a_j(x)>0}}\frac{m_j(x)}{a_j(x)}\right),$$
   where the inner minimum over an empty set is $+\infty$. If $\tau\le0$,
   return **step-size-infeasible** with the current path prefix. If
   $C(x)=\varnothing$, record that there is no critical event and skip
   the critical SSA call. If $C(x)\ne\varnothing$, call critical SSA for
   horizon $\tau$; it returns either no critical event before $\tau$, or a
   pair $(s,j_*)$ with $0<s<\tau$ and $j_*\in C(x)$.
   Set $\delta$ to $s$ in the event case and to $\tau$ otherwise.
3. Starting from $\widetilde x=x$, process the noncritical channels in
   increasing index order. Recompute $m_j(\widetilde x)$. If $a_j(\widetilde x)>0$ and
   $m_j(\widetilde x)=0$, return **critical-interface-required** with the
   current path prefix. Otherwise
   set $K_j=0$ when $m_j(\widetilde x)=0=a_j(\widetilde x)$. When
   $m_j(\widetilde x)>0$, set
   $p_j=a_j(\widetilde x)\delta/m_j(\widetilde x)$; if $p_j>1$, return
   **step-size-infeasible** with the current path prefix and without rejecting
   and resampling. Set
   $$K_j=\sum_{r=1}^{m_j(\widetilde x)}\mathbf 1_{\{U_{q,j,r}<p_j\}},\qquad
   \widetilde x\leftarrow\widetilde x+K_j\nu_j.$$
4. If critical SSA returned $(s,j_*)$, return **inconclusive** with the
   current path prefix when $\widetilde x+\nu_{j_*}\notin E$; otherwise apply
   that critical reaction to $\widetilde x$. If the call returned no event,
   leave $\widetilde x$ unchanged. Set $x\leftarrow\widetilde x$, set
   $t\leftarrow t+\delta$, append $(t,x)$ to $P$, set $q\leftarrow q+1$,
   and repeat.
