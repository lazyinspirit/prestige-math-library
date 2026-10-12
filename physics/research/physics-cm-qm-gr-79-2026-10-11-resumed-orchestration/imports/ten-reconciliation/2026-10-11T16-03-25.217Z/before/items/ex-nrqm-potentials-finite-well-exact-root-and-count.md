---
id: ex-nrqm-potentials-finite-well-exact-root-and-count
aliases: [nrqm-potentials-finite-well-exact-root-and-count]
kind: example
domain: physics
title: "Finite square well: an exactly solvable bound state and exact bound-state counts"
status: draft
origin: session
dependency_level: 12
deps: [pthm-nrqm-potentials-finite-well-bound-states, def-nrqm-potentials-one-dimensional-line-model, def-nrqm-framework-quantities-and-units, thm-quarter-turn-values-and-shift-formulas, thm-half-angle-identities-with-sign-conditions, thm-cofunction-supplementary-and-reflection-identities, cor-pi-is-the-first-positive-sine-zero, def-tangent-cotangent-secant-cosecant, def-countable-choice, def-axiom-of-choice]
dependency_roles:
  pthm-nrqm-potentials-finite-well-bound-states: physical-result
  def-nrqm-potentials-one-dimensional-line-model: formulation-prerequisite
  def-nrqm-framework-quantities-and-units: formulation-prerequisite
  thm-quarter-turn-values-and-shift-formulas: mathematical-premise
  thm-half-angle-identities-with-sign-conditions: mathematical-premise
  thm-cofunction-supplementary-and-reflection-identities: mathematical-premise
  cor-pi-is-the-first-positive-sine-zero: mathematical-premise
  def-tangent-cotangent-secant-cosecant: mathematical-premise
  def-countable-choice: mathematical-premise
  def-axiom-of-choice: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
physical_scope: "Finite checks in the declared line model of the pair for the finite square well: an exactly solvable depth at which the unique bound state has energy minus one half of the depth, and exact bound-state counts and branch parities for declared depths. The example is a conditional computation in the model; it reports no measurement, no material well and no empirical value, and asserts no conclusion about nature."
sources:
  references:
    - title: "D. Tong, Quantum Mechanics (author-hosted lecture set), Section 2.3.1, printed pages 42-48 (PDF pages 45-51): the finite well, the even and odd root conditions and the graphical solution count"
      url: "https://davidtong.org/pdfs/teaching/quantum-mechanics/qm.pdf"
    - title: "J. Binney and D. Skinner, The Physics of Quantum Mechanics, Section 5.1, printed pages 75-79 (PDF pages 83-87): the square well, the condition k tan(ka)=K, the always-present ground state and the count thresholds"
      url: "https://www-thphys.physics.ox.ac.uk/people/JamesBinney/qb.pdf"
verification:
  precheck: pass
---

## Example

Work in the declared line model
[[def-nrqm-potentials-one-dimensional-line-model]] with mass parameter $m>0$
and action constant $\hbar>0$, energies, lengths and the depth $U$ read in the
units of [[def-nrqm-framework-quantities-and-units]], and consider the finite
square well $V(x)=-U$ for $|x|<a$, $V(x)=0$ for $|x|>a$ of
[[pthm-nrqm-potentials-finite-well-bound-states]] with half-width $a>0$ and
depth $U>0$.

(i) *Exact boundary case of the first branch.* Declare
$$U:=\frac{\hbar^{2}\pi^{2}}{16ma^{2}} .$$
Then $K=\sqrt{2mU}/\hbar=\pi\sqrt2/(4a)$, the count parameter is
$2aK/\pi=\sqrt2/2$, there is exactly one bound state, it is an even
(cosine-type) state, and its binding energy is exactly
$$E=-\frac{U}{2}=-\frac{\hbar^{2}\pi^{2}}{32ma^{2}} .$$
For this declared depth the root of the even condition is exactly
$k=\kappa=\pi/(4a)$.

(ii) *Exact counts at declared depths.* With
$$U:=\frac{25\hbar^{2}\pi^{2}}{32ma^{2}}$$
one has $K=5\pi/(4a)$ and $2aK/\pi=5/2$, so there are exactly three bound
states, with types even, odd and even in order of increasing energy. With
$U:=\hbar^{2}\pi^{2}/(8ma^{2})$ one has $K=\pi/(2a)$ and exactly one bound
state; with $U:=\hbar^{2}\pi^{2}/(2ma^{2})$ one has $K=\pi/a$ and exactly two
bound states. For every declared depth $U>0$ there is at least one bound
state.

(iii) *Rational bracket of the first case.*
$$\frac{707}{1000}<\frac{2aK}{\pi}=\frac{\sqrt2}{2}<\frac{708}{1000},$$
so the count $\lceil 2aK/\pi\rceil$ equals one in case (i).

The example is a conditional computation in the declared well model and
asserts no measured binding energy; the identities in (i) and (ii) are exact in
the model at the displayed declared data.

## Verification

**Proof technique:** direct; verify the exact root condition at the declared
depth using the special value $\tan(\pi/4)=1$, read the count and branch
criterion from the finite-well theorem with exact rational comparisons, and
bracket the count parameter by rationals.

**Given:** The line model and the finite-well theorem [[pthm-nrqm-potentials-finite-well-bound-states]]; half-width $a>0$, mass $m>0$, action $\hbar>0$; the depths declared in (i) and (ii).

[F1] **Finite-well conclusions.** For every $a,U>0$ the assigned well operator is self-adjoint, its negative eigenvalues are exactly the numbers $E\in(-U,0)$ whose parameters $\kappa=\sqrt{2m(-E)}/\hbar$, $k=\sqrt{2m(U+E)}/\hbar$ satisfy $k\tan(ka)=\kappa$ or $-k\cot(ka)=\kappa$, each such eigenvalue is simple with the stated parity of the eigenfunction, there are no eigenvalues outside $(-U,0)$, the count is $\lceil 2aK/\pi\rceil$ with $K=\sqrt{2mU}/\hbar$, the solutions lie one in each branch $(n\pi/2a,(n+1)\pi/2a)$ whose left endpoint satisfies $n\pi/2a<K$ and nowhere else, and the types alternate with the parity of $n$ ([[pthm-nrqm-potentials-finite-well-bound-states]] clauses (a)-(c)).

[F2] **Special value of the tangent.** $\tan(\pi/4)=1$: by [[thm-cofunction-supplementary-and-reflection-identities]], $\cos(\pi/4)=\cos(\pi/2-\pi/4)=\sin(\pi/4)$; by [[cor-pi-is-the-first-positive-sine-zero]], $\sin(\pi/4)>0$; applying the half-angle identity of [[thm-half-angle-identities-with-sign-conditions]] at $x=\pi/2$, where $\sin(\pi/2)=1$ and $\cos(\pi/2)=0$ by [[thm-quarter-turn-values-and-shift-formulas]], gives $\sin(\pi/4)=\sqrt{(1-0)/2}=\sqrt2/2=\cos(\pi/4)$; hence $\tan(\pi/4)=\sin(\pi/4)/\cos(\pi/4)=1$ by [[def-tangent-cotangent-secant-cosecant]] and the positivity of $\cos(\pi/4)$.

[F3] **Rational order.** For positive integers, $\frac pq<\frac rs$ iff $ps<rq$, and $0<\frac12<1$; if $0<x$ and $x^{2}<1$ then $x<1$.

1.1 [First case: data and root] With $U=\hbar^{2}\pi^{2}/(16ma^{2})$ one has $K=\sqrt{2mU}/\hbar=\pi\sqrt2/(4a)$, hence $K^{2}=\pi^{2}/(8a^{2})$. Put $k=\kappa=\pi/(4a)$; then $k^{2}+\kappa^{2}=2\cdot\pi^{2}/(16a^{2})=\pi^{2}/(8a^{2})=K^{2}$, and $k\tan(ka)=\kappa\tan(\pi/4)=\kappa$ by [F2], so the even condition of [F1] holds with $E=-\hbar^{2}\kappa^{2}/(2m)=-\hbar^{2}\pi^{2}/(32ma^{2})=-U/2$. By [F1] this $E$ is a simple eigenvalue with an even eigenfunction. [given, F1, F2, algebra]

1.2 [Second case: three states] With $U=25\hbar^{2}\pi^{2}/(32ma^{2})$ one has $K=\sqrt{2mU}/\hbar=5\pi/(4a)$, so $2aK/\pi=5/2$ and $\lceil 5/2\rceil=3$. The admissible branches are those with left endpoint $n\pi/(2a)<5\pi/(4a)$, i.e. $\frac n2<\frac54$; by [F3] this holds exactly for $n=0,1,2$ (for $n=2$, $1<5/4$; for $n=3$, $3/2>5/4$), so by [F1] there are exactly three negative eigenvalues, one in each of the branches $n=0,1,2$, with types even, odd, even. [F1, F3, algebra]

2.1 [First case: count] The count parameter is $2aK/\pi=2a\pi\sqrt2/(4a)/\pi=\sqrt2/2$. Since $(\sqrt2/2)^{2}=1/2<1$ and $\sqrt2/2>0$, [F3] gives $\sqrt2/2<1$; and $\sqrt2/2>0$. Hence $\lceil 2aK/\pi\rceil=1$ by [F1]; the branch with $n=0$ has left endpoint $0<K$, while the branch with $n=1$ has left endpoint $\pi/(2a)$ and $\pi/(2a)>K=\pi\sqrt2/(4a)$ because $\frac12>\frac{\sqrt2}{4}=\frac{1}{2\sqrt2}$, equivalently $\sqrt2>1$, which holds since $\sqrt2^{2}=2>1$ and $\sqrt2>0$. So the unique branch is $n=0$, the even branch, consistent with step 1.1. [step 1.1, F1, F3, algebra]

2.2 [Thresholds and the ground state] For $K=\pi/(2a)$ the count parameter is $2aK/\pi=1$ and the branch $n=0$ is admissible while $n=1$ has left endpoint $\pi/(2a)=K$, not strictly smaller, so exactly one bound state; for $K=\pi/a$ the count parameter is $2$ and the admissible branches are $n=0,1$ (left endpoints $0<\pi/a$ and $\pi/(2a)<\pi/a$), so exactly two. Since $\lceil x\rceil\ge1$ for every $x>0$ and the branch $n=0$ is always admissible, every well with $a,U>0$ has at least one bound state. [step 1.2, F1, F3, algebra]

3.1 [Bracket and reading] The bracket $\frac{707}{1000}<\frac{\sqrt2}{2}<\frac{708}{1000}$ follows from [F3] because $(\frac{707}{1000})^{2}=\frac{499849}{1000000}<\frac12<\frac{501264}{1000000}=(\frac{708}{1000})^{2}$; hence $\frac{707}{1000}<2aK/\pi<\frac{708}{1000}$ in case (i) and the count is one. No measured quantity is produced: the identities above are exact relations between the declared model data and the model's binding energies. [step 2.1, step 1.2, F1, F3, algebra] ∎

## Remarks

- **Why the first case is exactly solvable.** At the declared depth
  $K=\pi\sqrt2/(4a)$ the radius circle of the even root condition passes
  through the point $k=\kappa=\pi/(4a)$ of the first branch, where
  $\tan(ka)=1$, so the transcendental root condition is satisfied by an
  exact rational multiple of $1/a$ and the binding energy is exactly $U/2$.
- **What the counts show and what they do not.** The comparisons verify the
  branch criterion and the ceiling formula at declared depths. They are not a
  numerical solution of the transcendental equations at generic depths, do not
  compare with data and assert nothing about any physical well.
