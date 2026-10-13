---
id: def-cm16-finite-time-growth-rates
kind: definition
title: "Finite-time tangent growth rates and Lyapunov exponents of the model's flow: the rate per unit time of a transported deviation, with its existence convention and its limits"
status: published
origin: session
domain: physics
dependency_level: 12
deps: [def-cm16-flow-equilibria-and-invariant-sets,
       def-cm16-stability-and-hyperbolicity-concepts,
       def-cm-finite-time-tangent-growth-rate-and-lyapunov-exponent,
       def-natural-logarithm,
       def-euclidean-inner-product,
       cor-cm-flow-domain-open-and-flow-is-c1,
       def-cm01-units]
dependency_roles:
  def-cm16-flow-equilibria-and-invariant-sets: formulation-prerequisite
  def-cm16-stability-and-hyperbolicity-concepts: formulation-prerequisite
  def-cm-finite-time-tangent-growth-rate-and-lyapunov-exponent: mathematical-premise
  def-natural-logarithm: mathematical-premise
  def-euclidean-inner-product: mathematical-premise
  cor-cm-flow-domain-open-and-flow-is-c1: mathematical-premise
  def-cm01-units: formulation-prerequisite
provenance:
  statement: ai-altered
  proof: not-applicable
physical_scope: "The finite-time tangent growth rate and, when the limit exists, the Lyapunov exponent of a declared autonomy model whose force map is of class C1 in the state: the rate is the logarithm per unit time of the Euclidean norm of a nonzero transported deviation vector, and the exponent is assigned only for a forward-unbounded reference lifetime and an existing finite large-time limit. The item fixes the definition, its dependence on the chart and norm, and the boundaries of what the rate does and does not assert (positive finite-time growth is not chaos, not instability of a trajectory and not an invariant of a change of coordinates)."
sources:
  references:
    - title: "Iain Stewart, Advanced Classical Mechanics (MIT 8.09/8.309, Fall 2014), Chapter 7 pp. 143-195: Lyapunov exponents, finite-time growth and the warning that numerical divergence is not a proof of chaos"
      url: "https://ocw.mit.edu/courses/8-09-classical-mechanics-iii-fall-2014/d9bac33f6c60b304dc0398e99b327102_MIT8_09F14_full.pdf"
    - title: "Konstantin Likharev, Essential Graduate Physics: Classical Mechanics (title page last edited September 1, 2026), Chapter 9 'Chaos': Lyapunov exponents, their numeric status and the limits of the discussion"
      url: "https://essentialgraduatephysics.org/Files/CM%20merged.pdf"
    - title: "Gerald Sussman and Jack Wisdom, Structure and Interpretation of Classical Mechanics, 2nd ed., §4.3 and §7.2: linear growth of infinitesimal deviations versus finite separation, and the warning that an unbounded coordinate change can alter exponents"
      url: "https://mitp-content-server.mit.edu/books/content/sectbyfn/books_pres_0/9579/sicm_edition_2.zip"
---

## Definition

Let an autonomous stability model be fixed with force map of class $C^1$ in the
state ([[def-cm16-flow-equilibria-and-invariant-sets]] clauses (i)-(ii)), so
that the associated field $G$ is $C^1$ on the state domain $S_0$ and its local
flow $\Phi:\Omega\to S_0$ is $C^1$ on the open flow domain $\Omega$
([[cor-cm-flow-domain-open-and-flow-is-c1]]).

**(i) The finite-time rate.** Let $z\in S_0$, let $t>0$ with $(t,z)\in\Omega$,
and let $u\in\mathbb R^{6N}\setminus\{0\}$ satisfy
$D_z\Phi_t(z)u\ne0$, where $\Phi_t:=\Phi(t,\cdot)$ and $D_z\Phi_t(z)$ is its
total derivative ([[def-cm16-flow-equilibria-and-invariant-sets]] clause (ii),
[[cor-cm-flow-domain-open-and-flow-is-c1]]). The
**finite-time tangent growth rate of $(z,u)$ over the time $t$** is
$$r(t,z,u):=\frac1t\log\!\left(\frac{\lVert D_z\Phi_t(z)u\rVert_2}{\lVert u\rVert_2}\right)\in\mathbb R,$$
with the Euclidean norm of [[def-euclidean-inner-product]] and the natural
logarithm of [[def-natural-logarithm]]; this is the definition of
[[def-cm-finite-time-tangent-growth-rate-and-lyapunov-exponent]] applied to
the model's field $G$. The rate has the dimension of inverse time,
$[r]=\tau^{-1}$ ([[def-cm01-units]]): it is a logarithm per unit of the frame
time.

**(ii) The Lyapunov exponent.** Require the maximal forward lifetime of the reference state $z$ to be unbounded above, equivalently $(t,z)\in\Omega$ for every $t\ge0$. Under this condition, if the limit
$$\lambda(z,u):=\lim_{\substack{t\to\infty\\(t,z)\in\Omega}}r(t,z,u)$$
exists in $\mathbb R$, it is the **Lyapunov exponent of $(z,u)$**; if the
forward lifetime is bounded above or the limit does not exist, **no exponent is assigned** and no value $+\infty$ or
$-\infty$ is named. In particular the definition does not assert that the
limit exists, and it does not average over an invariant measure or over
initial data.

**(iii) Reading and chart dependence.** (a) A positive rate at time $t$ says
that the deviation $u$ has grown by a factor $e^{r(t,z,u)t}$ in the Euclidean
state norm on $[0,t]$; a negative rate says it has shrunk. (b) The rate
depends on the norm and on the state chart: scaling the state coordinates by
positive constants multiplies distances by a bounded factor and changes
$r(t,z,u)$ by at most $t^{-1}\log(\text{scale ratio})$, so the large-time
exponent is unchanged by fixed rescaling but need not be preserved by an
unbounded chart change
([[def-cm16-stability-and-hyperbolicity-concepts]] clause (vi)(b)). (c) The
rate is attached to a state and a tangent vector and requires the reference
state to remain in the flow domain for the whole time $t$; if the maximal
solution through $z$ is not defined on $[0,t]$, no rate is assigned at
$(z,t)$.

**(iv) What the rate does not assert.** A positive finite-time rate is not a
definition of chaos, not a claim that the model's flow has a chaotic invariant
set, and not an instability statement about the reference motion; it is a
property of the linearised flow over the stated time. In particular, a
hyperbolic equilibrium of the linear models used in the page's checks has
positive rates along its unstable directions while its compact invariant sets
need not be chaotic (see the page's counterexample on the repulsive linear
model). No probabilistic, almost-everywhere or empirical claim is made by this
definition.

## Remarks

- **Exponents versus the chaos list.** The page's chaos list is a list of
  topological properties of a map on an invariant set; it does not assert that
  any Lyapunov exponent exists, and no clause of this definition asserts any
  of the topological properties.

