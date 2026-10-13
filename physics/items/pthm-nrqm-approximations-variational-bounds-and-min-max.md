---
id: pthm-nrqm-approximations-variational-bounds-and-min-max
aliases: [ nrqm-approximations-variational-bounds-and-min-max ]
kind: physics-theorem
domain: physics
title: "Variational trial bounds, gap-overlap control and the min-max
  characterisation of the declared model's discrete eigenvalues"
status: draft
origin: session
dependency_level: 11
deps:
  [
    def-nrqm-approximations-framework-variational-trial-model,
    post-nrqm-framework-observable-and-probability,
    def-nrqm-observables-framework-observable-and-outcome-law,
    pthm-nrqm-observables-preparation-moments,
    thm-nrqm-fock-and-equilibrium-variational-ground-gap-overlap,
    thm-min-max-principle-below-essential-spectrum,
    lem-spectral-form-domain-and-core-of-a-semibounded-operator,
    thm-spectral-theorem-for-unbounded-self-adjoint-operators,
    def-projection-valued-measure,
    def-discrete-and-essential-spectrum-of-a-self-adjoint-operator,
    def-countable-choice,
    def-axiom-of-choice
  ]
dependency_roles:
  def-nrqm-approximations-framework-variational-trial-model: formulation-prerequisite
  post-nrqm-framework-observable-and-probability: physical-assumption
  def-nrqm-observables-framework-observable-and-outcome-law: formulation-prerequisite
  pthm-nrqm-observables-preparation-moments: physical-result
  thm-nrqm-fock-and-equilibrium-variational-ground-gap-overlap: mathematical-premise
  thm-min-max-principle-below-essential-spectrum: mathematical-premise
  lem-spectral-form-domain-and-core-of-a-semibounded-operator: mathematical-premise
  thm-spectral-theorem-for-unbounded-self-adjoint-operators: mathematical-premise
  def-projection-valued-measure: mathematical-premise
  def-discrete-and-essential-spectrum-of-a-self-adjoint-operator: mathematical-premise
  def-countable-choice: mathematical-premise
  def-axiom-of-choice: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
physical_scope: "The variational and min-max statements of the declared trial
  model: every trial value is at least the model bottom E0, a trial value within
  epsilon of an isolated bottom with gap g forces ground-projection content at
  least 1 - epsilon/g, and the model's discrete eigenvalues below the essential
  spectrum are exactly the min-max values over trial subspaces of the form
  domain. All quantities are readings of the declared operator; no measurement,
  apparatus, sampling model or laboratory identification is asserted."
empirical_premises: []
sources:
  references:
    - title: "J. Binney and D. Skinner, The Physics of Quantum Mechanics, Section 9.2
        printed pages 212-213 (PDF pages 220-221): Rayleigh's theorem, the bound
        <H> >= E0 and the variational principle with a parameter-dependent trial
        wavefunction"
      url: "https://www-thphys.physics.ox.ac.uk/people/JamesBinney/qb.pdf"
    - title: "B. Zwiebach, MIT 8.05 Quantum Physics II (Fall 2013), Chapter 1 'Wave
        Mechanics', Section 5 printed pages 19-21 (PDF pages 18-20): E_gs <=
        <H>_psi for a normalised trial wavefunction (5.13) and the functional
        F[psi] (5.20)"
      url: "https://ocw.mit.edu/courses/8-05-quantum-physics-ii-fall-2013/61bc31b8d8b\
        f0680c322733910a71aa0_MIT8_05F13_Chap_01.pdf"
    - title: "G. Teschl, Mathematical Methods in Quantum Mechanics, 1st edition 2009,
        Section 4.3 printed pages 117-119 (PDF pages 129-131): the min-max
        theorem (Theorem 4.10) with the form-domain remark, and Section 4.4
        printed pages 119-121 (PDF pages 131-133): eigenspace estimates"
      url: "https://www.mat.univie.ac.at/~gerald/ftp/book-schroe/schroe.pdf"
verification:
  precheck: pass
---

## Statement

Adopt the framework data and the declared variational trial model of
[[def-nrqm-approximations-framework-variational-trial-model]]: a declared
system with self-adjoint assigned energy observable $H$ on $\mathfrak H$,
bounded below by a real $c$, with model bottom $E_{0}=\inf\sigma(H)$, form
domain $Q(H)$, form $q_{H}$ and spectral projection-valued measure $E$; a
trial vector is a unit vector $u\in Q(H)$ and its trial value is $q_{H}[u]$.
Assume the Axiom of Countable Choice and the Axiom of Choice
([[def-countable-choice]], [[def-axiom-of-choice]]) as the choice hypotheses
of the cited spectral suppliers. Then:

(a) *Trial lower bound.* For every trial vector $u\in Q(H)$,
$$q_{H}[u]\ge E_{0},$$
so every trial value is an upper bound for the model bottom; consequently
$E_{0}=\inf\{q_{H}[u]:u\in Q(H),\ \|u\|=1\}$.

(b) *Gap-overlap control.* Suppose in addition that the bottom is isolated
with gap $g>0$ and let $P:=E(\{E_{0}\})$ (clause (d) of the model). Then for
every trial vector $u$ with $q_{H}[u]\le E_{0}+\varepsilon$, $\varepsilon\ge0$,
$$\bigl\|(I-P)u\bigr\|^{2}\le\frac{\varepsilon}{g};$$
in particular, if $\varepsilon<g$, then $Pu\ne0$.

(c) *Min-max.* Let $\Lambda:=\inf\sigma_{\mathrm{ess}}(H)$ and let
$E_{1}\le E_{2}\le\cdots$ be the discrete eigenvalue ladder of the model
clause (d), with $E_{n}:=\Lambda$ after exhaustion and $\inf\varnothing=+\infty$.
Then for every integer $n\ge1$,
$$E_{n}=\inf_{\substack{L\subseteq Q(H)\ \text{linear}\\ \dim L=n}}\ \sup_{\substack{u\in L\\ \|u\|=1}}q_{H}[u] =\sup_{\substack{F\subseteq Q(H)\ \text{linear}\\ \dim F\le n-1}}\ \inf_{\substack{u\in Q(H)\cap F^{\perp}\\ \|u\|=1}}q_{H}[u],$$
with the infimum over an empty set read as $+\infty$; moreover $E_{1}=E_{0}$,
and when $E_{n}<\Lambda$ both outer values are attained, respectively by a span
of the first $n$ and a span of the first $n-1$ orthonormal eigenvectors.

(d) *Consequence for trial subspaces.* For every linear subspace $L\subseteq
Q(H)$ of dimension $n\ge1$ whose supremum is finite, $E_{n}\le\sup\{q_{H}[u]:
u\in L,\ \|u\|=1\}$; for $n=1$ this is clause (a) with $u$ a unit vector of $L$.

(e) *Reading and scope.* All numbers $E_{0}$, $E_{n}$, $q_{H}[u]$ are read in
joules. For a trial vector in $D(H)$ the trial value is the mean energy of the
pure preparation in the moment reading of
[[pthm-nrqm-observables-preparation-moments]]; for a trial vector in
$Q(H)\setminus D(H)$ it is a form value and no outcome-law mean is asserted.
The theorem asserts nothing about whether the infimum in (a) is attained,
about a ground eigenvector, about time evolution, equilibration or
environmental coupling, and about any measured energy; it is a statement about
the declared operator $H$.

## Facts & Assumptions

**Given:** the declared trial model of [[def-nrqm-approximations-framework-variational-trial-model]] with its data $H,c,E_{0},Q(H),q_{H},E$; a gap $g>0$ and $P=E(\{E_{0}\})$ in clause (b); $\Lambda$ and the ladder $(E_{n})$ in clause (c); the choice hypotheses.

[F1] **Spectral data of the model.** $H$ is self-adjoint with dense domain and $E$ its regular projection-valued measure; $\sigma(H)$ is the set of real $\lambda$ every neighbourhood of which has nonzero spectral projection, the spectrum is contained in $[E_{0},+\infty)$ because $E_{0}=\inf\sigma(H)$, and $D(H)=\{u:\int\lambda^{2}dE_{u}(\lambda)<\infty\}$ ([[thm-spectral-theorem-for-unbounded-self-adjoint-operators]], [[def-projection-valued-measure]], [[def-discrete-and-essential-spectrum-of-a-self-adjoint-operator]]).

[F2] **Form and moments.** $Q(H)$ and $q_{H}[u]=\int_{\mathbb R}\lambda\,dE_{u}(\lambda)$ are independent of the lower bound chosen in the model, $D(H)$ is dense in $Q(H)$ for the form norm, $q_{H}[u]\ge c\|u\|^{2}$, and $q_{H}[u]=\langle Hu,u\rangle$ for $u\in D(H)$ ([[lem-spectral-form-domain-and-core-of-a-semibounded-operator]]). $E_{u}(B)=\|E(B)u\|^{2}$ is a measure of total mass $\|u\|^{2}$ ([[def-projection-valued-measure]]).

[F3] **Supplied trial and gap estimates.** Let $H'$ be a self-adjoint operator on a nonzero complex Hilbert space, bounded below with bottom $E_{0}'$, let $g'>0$ satisfy $\sigma(H')\cap(E_{0}',E_{0}'+g')=\varnothing$, put $P':=E_{H'}(\{E_{0}'\})$, and let $q_{H'}$ be the form of [[lem-spectral-form-domain-and-core-of-a-semibounded-operator]]. On the spectral support $[E_{0}',\infty)$, $|t|\le(t-c)+|c|$ and $t-c\le|t|+|c|$ for any lower bound $c$; since $E_u(\mathbb R)=\|u\|^{2}<\infty$, these inequalities show $Q(H')=D(|H'|^{1/2})$. Thus for every unit $u\in Q(H')$, the supplied theorem gives $q_{H'}[u]-E_{0}'\ge g'\|(I-P')u\|^{2}$; and if $q_{H'}[u]\le E_{0}'+\varepsilon$ then $\|(I-P')u\|^{2}\le\varepsilon/g'$, with $P'u\ne0$ when $\varepsilon<g'$ ([[lem-spectral-form-domain-and-core-of-a-semibounded-operator]], [[thm-spectral-theorem-for-unbounded-self-adjoint-operators]], [[thm-nrqm-fock-and-equilibrium-variational-ground-gap-overlap]] clauses (a), (b)).

[F4] **Supplied min-max theorem.** Under the Axiom of Choice, for a self-adjoint operator $A$ bounded below on a complex Hilbert space, with form domain $Q(A)$, form $q_{A}$, $\Lambda_{A}=\inf\sigma_{\mathrm{ess}}(A)$ and the eigenvalue ladder $E_{1}^{A}\le E_{2}^{A}\le\cdots$ below $\Lambda_{A}$ (equal to $\Lambda_{A}$ after exhaustion), the two min-max formulas of clause (c) hold for every $n\ge1$, with infima over empty sets $+\infty$; if $E_{n}^{A}<\Lambda_{A}$ both outer values are attained by spans of the first $n$ and first $n-1$ orthonormal eigenvectors ([[thm-min-max-principle-below-essential-spectrum]]).

## Proof

**Proof technique:** direct; read the trial value as a spectral integral over the carrier $[E_{0},+\infty)$ for (a), invoke the supplied gap estimate for (b), instantiate the supplied min-max theorem for (c), and compare trial families for (d).

**Given:** the data of the statement and [F1]-[F4].

1.1 [Clause (a)] By [F1] the spectrum lies in $[E_{0},+\infty)$, so every real $t<E_{0}$ has a neighbourhood, namely $(2t-E_{0},E_{0})$, with zero spectral projection, and countable subadditivity of the finite measure $E_{u}$ over the rational intervals contained in $(-\infty,E_{0})$ gives $E_{u}((-\infty,E_{0}))=0$. Hence $E_{u}$ is carried by $[E_{0},+\infty)$ and, for $u\in Q(H)$ with the finite integral of [F2], $$q_{H}[u]=\int_{\mathbb R}\lambda\,dE_{u}(\lambda) =\int_{[E_{0},\infty)}\lambda\,dE_{u}(\lambda) \ge E_{0}\int_{[E_{0},\infty)}dE_{u}(\lambda)=E_{0}\|u\|^{2}=E_{0},$$ since $u$ is a trial vector. For the reverse infimum inequality, let $\eta>0$. Since $E_{0}=\inf\sigma(H)$, choose $t\in\sigma(H)$ with $E_{0}\le t<E_{0}+\eta/2$. Choose a bounded open interval $J$ containing $t$ and contained in $(-\infty,E_{0}+\eta)$. The spectral-support characterization in [F1] gives $E(J)\ne0$; choose a unit vector $u$ in its range. Its spectral measure is supported in the bounded set $J$, hence $u\in Q(H)$ and $q_H[u]\le E_{0}+\eta$. Thus the infimum of trial values is exactly $E_{0}$, as claimed in (a). [F1, F2, given, choose, algebra]

1.2 [Clause (b)] The model's clause (b) supplies a self-adjoint $H$ bounded below with bottom $E_{0}=\inf\sigma(H)$, and clause (b) of the statement supplies the gap $\sigma(H)\cap(E_{0},E_{0}+g)=\varnothing$ and $P=E(\{E_{0}\})$; the model's $Q(H)$ and $q_{H}$ are those of [F2], which are the ones used by the supplied estimate [F3] with $H'=H$, $E_{0}'=E_{0}$, $g'=g$, $P'=P$. Applying [F3] gives $q_{H}[u]-E_{0}\ge g\|(I-P)u\|^{2}$, hence $\|(I-P)u\|^{2}\le\varepsilon/g$ whenever $q_{H}[u]\le E_{0}+\varepsilon$, and $P u\ne0$ when $\varepsilon<g$. [F2, F3, given]

1.3 [Clause (c)] The operator $H$ is self-adjoint and bounded below, so [F4] applies with $A=H$; its form domain and form are $Q(H)$ and $q_{H}$ by [F2], its essential spectrum is $\sigma_{\mathrm{ess}}(H)$ with $\Lambda=\inf\sigma_{\mathrm{ess}}(H)$, and its eigenvalue ladder below $\Lambda$, with the after-exhaustion convention, is exactly the ladder $(E_{n})$ of the model clause (d) by [[def-discrete-and-essential-spectrum-of-a-self-adjoint-operator]]. Hence the two displayed min-max identities and the attainment statement for $E_{n}<\Lambda$ hold. [F2, F4, given]

2.1 [The identification $E_{1}=E_{0}$] For $n=1$ the second min-max formula in [F4] has only $F=\{0\}$, so it gives $E_{1}=\inf\{q_{H}[u]:u\in Q(H),\|u\|=1\}$. Step 1.1 identifies this infimum as $E_{0}$, hence $E_{1}=E_{0}$ and the additional assertion of (c) follows. This argument does not assume that the infimum is attained or that a bottom eigenvector exists. [F2, F4, step 1.1, step 1.3, given, algebra]

3.1 [Clause (d)] Let $L\subseteq Q(H)$ have dimension $n$ and finite supremum $s=\sup\{q_H[u]:u\in L,\|u\|=1\}$. This particular $L$ belongs to the first min-max infimum of step 1.3, so $E_n\le s$ directly; attainment of the inner supremum is unnecessary. If $n=1$ and $u$ is any unit spanning vector, the unit vectors of the complex line are $\alpha u$ with $|\alpha|=1$, and the quadratic form satisfies $q_H[\alpha u]=|\alpha|^2q_H[u]=q_H[u]$. Thus $s=q_H[u]$ and $E_1=E_0$ reduces the assertion to (a). [step 1.3, step 2.1, F2, algebra]

4.1 [Clause (e)] The units are those of the model: $H$ and $q_{H}$ in joules, so $E_{0}$ and $E_{n}$ are read in joules. For $u\in D(H)$, $q_{H}[u]=\langle Hu,u\rangle$ by [F2], which is the mean of the assigned sharp energy observable in the pure preparation $[u]$ by [[pthm-nrqm-observables-preparation-moments]] clause (a); for $u\in Q(H)\setminus D(H)$ the value $q_{H}[u]$ is the form value of [F2] and no outcome-law mean is asserted. No measurement, apparatus or sampling model entered the argument, and every object is a spectral datum of the declared operator $H$. [F2, F3, given] ∎

## Remarks

- **No attained-ground-state hypothesis.** Clauses (a) and (c) hold whether or not $E_{0}$ is an eigenvalue and whether or not the infimum of the trial values is attained; clause (b) states precisely what an isolated bottom with gap $g$ forces. This is the form-domain reading required of the variational bound: the trial vector need not lie in $D(H)$.
- **Choice.** The min-max clause cites the published min-max theorem, which assumes the Axiom of Choice; the trial lower bound of clause (a) and the gap estimate of clause (b) are, through their suppliers, Countable-Choice statements in their other dependencies. Consumers that use clause (c) carry the Axiom of Choice.
