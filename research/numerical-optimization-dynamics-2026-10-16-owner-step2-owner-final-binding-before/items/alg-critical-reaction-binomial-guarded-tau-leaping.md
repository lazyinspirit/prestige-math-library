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
$B$ that is a nonnegative integer, and the ideal random draws required by
the procedure. For a state $x$ and channel $j$, define its admissible firing
capacity
$$\mathbb N_0:=\{0,1,2,\ldots\},\qquad m_j(x):=\max\{m\in\mathbb N_0:x+r\nu_j\in E \text{ for every integer }r\in\{0,\ldots,m\}\}.$$
Finiteness of $E$ and $\nu_j\ne0$ make this maximum finite. Let
$C(x)=\{j:m_j(x)\le n_c\}$ be the critical set. When $C(x)\ne\varnothing$,
hold $C(x)$ fixed and form the finite reaction system on $E$ using only those
channels, with their original propensities. If $C(x)=\varnothing$, do not
form a restricted system and define the critical result to be no event. In
the nonempty case, the critical SSA subroutine runs the direct Gillespie
method on this restricted system with event budget one and horizon $\tau$;
it returns its first event $(s,j_*)$ if it occurs by $\tau$, and otherwise
returns no event. The restricted system remains admissible because its
positive-rate transitions are among those of the original system. The exactness theorem
[[thm-finite-state-gillespie-and-next-reaction-exactness]] applies under
Countable Choice and Dependent Choice, which are assumed for this subroutine.
That theorem's full-path law implies the one-event prefix law used here; the
finite event budget returns this first-event prefix only.

**Procedure.** Set $t=0$, $x=x_0$, and status **completed**.

1. If $t=T$, return the completed path. If $x\notin E$, return the current
   path prefix with status **invalid-state**. If the step budget is exhausted
   before $T$, return the current path prefix with status **inconclusive**.
   If $\lambda(x)=0$, hold $x$ fixed through $T$ and return **absorbed**.
2. Compute $C(x)$ and
   $$\tau=\min\!\left(T-t,\tau_{\max}, \min_{\substack{j\notin C(x)\\a_j(x)>0}}\frac{m_j(x)}{a_j(x)}\right),$$
   where the inner minimum over an empty set is $+\infty$. If $\tau\le0$,
   return **step-size-infeasible** with the current path prefix. If
   $C(x)=\varnothing$, record that there is no critical event and skip
   the critical SSA call. If $C(x)\ne\varnothing$, call critical SSA for
   horizon $\tau$; it returns either no critical event before $\tau$, or a
   pair $(s,j_*)$ with $0<s\le\tau$ and $j_*\in C(x)$.
   Set $\delta$ to $s$ in the event case and to $\tau$ otherwise.
3. Starting from $\widetilde x=x$, process each noncritical channel in a
   fixed order. Recompute $m_j(\widetilde x)$. If $a_j(\widetilde x)>0$ and
   $m_j(\widetilde x)=0$, return **critical-interface-required** with the
   current path prefix. Otherwise
   set $K_j=0$ when $m_j(\widetilde x)=0=a_j(\widetilde x)$. When
   $m_j(\widetilde x)>0$, set
   $p_j=a_j(\widetilde x)\delta/m_j(\widetilde x)$; if $p_j>1$, return
   **step-size-infeasible** with the current path prefix and without rejecting
   and resampling. Draw
   $K_j\sim\operatorname{Binomial}(m_j,p_j)$ and update
   $\widetilde x\leftarrow\widetilde x+K_j\nu_j$.
4. If critical SSA returned $(s,j_*)$ but
   $\widetilde x+\nu_{j_*}\notin E$, return **inconclusive** with the current
   path prefix. Otherwise apply
   that one critical reaction. Set $x\leftarrow\widetilde x$ (after the
   critical reaction, if present), set $t\leftarrow t+\delta$, increase the
   step count, and repeat.

At every binomial update, $K_j\le m_j(\widetilde x)$, so each sequential
intermediate state stays in $E$. The finite budget prevents an infinite run.
Each loop processes at most $R$ noncritical channels and one first-event SSA
call over at most $R$ channels, so under a unit-operation convention its
work is $O(BR)$; random-number generation internals are excluded.
The direct-method random stream uses Countable Choice and Dependent Choice
through [[thm-countable-product-of-probability-spaces]]; the exact event law
uses them as stated in the cited exactness theorem.
This guarded procedure changes the Poisson count law: the binomial variance is
$m_jp_j(1-p_j)$, not the Poisson variance $a_j\delta$. The weak-order and MLMC
claims for explicit Poisson tau-leaping below do not transfer to this algorithm.
No correctness or convergence theorem for the guarded hybrid is claimed here.
