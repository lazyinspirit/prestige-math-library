---
id: lem-nrqm-scattering-model-scaling-correspondence
aliases: [nrqm-scattering-model-scaling-correspondence]
kind: lemma
domain: mathematics
title: "Unit, time and spectral correspondence between the physical scattering operators and the nondimensional Laplacian"
status: draft
origin: session
dependency_level: 4
deps: [thm-nrqm-composites-real-multipliers-and-free-bounded-potential-operators, lem-nrqm-central-free-operator-differential-identification, lem-nrqm-potentials-positive-scaling-of-self-adjoint-operators, thm-spectral-theorem-for-unbounded-self-adjoint-operators, thm-bounded-borel-pvm-integral, def-unbounded-integral-against-a-pvm, def-projection-valued-measure, thm-unbounded-borel-functional-calculus, lem-self-adjoint-operator-generates-a-strongly-continuous-unitary-group, def-hilbert-space, def-bounded-linear-operator, def-sobolev-space-wkp-and-its-norm, def-countable-choice, def-axiom-of-choice]
dependency_roles:
  thm-nrqm-composites-real-multipliers-and-free-bounded-potential-operators: mathematical-premise
  lem-nrqm-central-free-operator-differential-identification: mathematical-premise
  lem-nrqm-potentials-positive-scaling-of-self-adjoint-operators: mathematical-premise
  thm-spectral-theorem-for-unbounded-self-adjoint-operators: mathematical-premise
  thm-bounded-borel-pvm-integral: mathematical-premise
  def-unbounded-integral-against-a-pvm: mathematical-premise
  def-projection-valued-measure: mathematical-premise
  thm-unbounded-borel-functional-calculus: mathematical-premise
  lem-self-adjoint-operator-generates-a-strongly-continuous-unitary-group: mathematical-premise
  def-hilbert-space: mathematical-premise
  def-bounded-linear-operator: mathematical-premise
  def-sobolev-space-wkp-and-its-norm: mathematical-premise
  def-countable-choice: mathematical-premise
  def-axiom-of-choice: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "G. Teschl, Mathematical Methods in Quantum Mechanics, 1st edition 2009, Chapter 7 Sections 7.2-7.3 printed pages 194-199 (PDF pages 206-211): the free Schroedinger operator, its Fourier multiplier form and its Sobolev domain"
      url: "https://www.mat.univie.ac.at/~gerald/ftp/book-schroe/schroe.pdf"
    - title: "G. Teschl, Mathematical Methods in Quantum Mechanics, 1st edition 2009, Chapter 3 Section 3.1 printed pages 99-111 (PDF pages 111-123): the spectral theorem, the functional calculus and the uniqueness of the projection valued measure"
      url: "https://www.mat.univie.ac.at/~gerald/ftp/book-schroe/schroe.pdf"
verification:
  precheck: pass
---

## Statement

Assume the Axiom of Countable Choice and the Axiom of Choice
([[def-countable-choice]], [[def-axiom-of-choice]]). Let $m,\hbar>0$, put
$c:=\hbar^{2}/(2m)$, let $\mathcal F_{2}$ be the unitary Plancherel transform of
[[thm-nrqm-composites-real-multipliers-and-free-bounded-potential-operators]]
clause (b) in dimension $d=3$, let $V:\mathbb R^{3}\to\mathbb R$ be measurable
with $\|V\|_{\infty}<\infty$, and put $W:=V/c$. Write
$$A_{0}:=\mathcal F_{2}^{*}M_{4\pi^{2}|\xi|^{2}}\mathcal F_{2},\qquad D(A_{0}):=\bigl\{f\in L^{2}(\mathbb R^{3};\mathbb C):|\xi|^{2}\mathcal F_{2}f\in L^{2}(\mathbb R^{3};\mathbb C)\bigr\},$$
$$A:=A_{0}+M_{W},\quad D(A):=D(A_{0}),\qquad H_{0}:=cA_{0},\qquad H:=cA=cA_{0}+M_{V}.$$
So $A_{0}$ is the operator $-\Delta_{w}$ of
[[lem-nrqm-central-free-operator-differential-identification]] and
$D(A_{0})=W^{2,2}(\mathbb R^{3};\mathbb C)$
([[def-sobolev-space-wkp-and-its-norm]]). For a self-adjoint operator $T$ write
$E_{T}$ for the regular projection valued measure of
[[thm-spectral-theorem-for-unbounded-self-adjoint-operators]] and
$\mu^{T}_{\psi}(B):=\langle E_{T}(B)\psi,\psi\rangle$ for $\psi\in L^{2}$. Then:

(a) $A$ and $H$ are self-adjoint with domain $D(A)=W^{2,2}(\mathbb R^{3};\mathbb C)$,
and $H=cA$ and $H_{0}=cA_{0}$ hold as operator identities on that common domain;

(b) for every Borel set $B\subseteq\mathbb R$,
$$E_{H}(cB)=E_{A}(B),\qquad E_{H_{0}}(cB)=E_{A_{0}}(B);$$
consequently $\mu^{H}_{\psi}(cB)=\mu^{A}_{\psi}(B)$ for every $\psi$ and every
Borel $B$, and $\sigma(H)=c\,\sigma(A)$, $\sigma(H_{0})=c\,\sigma(A_{0})$;

(c) for every $t\in\mathbb R$, with $\tau:=\hbar t/(2m)=\frac{tc}{\hbar}$,
$$e^{-itH/\hbar}=e^{-i\tau A},\qquad e^{-itH_{0}/\hbar}=e^{-i\tau A_{0}},$$
where the exponentials are those of
[[lem-self-adjoint-operator-generates-a-strongly-continuous-unitary-group]];

(d) let $F:\mathbb R\to\mathcal B(L^{2})$ be any family of bounded operators and
$\tau(t):=\hbar t/(2m)$. For every $\psi\in L^{2}$ the strong limit
$\lim_{t\to\pm\infty}F(\tau(t))\psi$ exists if and only if
$\lim_{\tau\to\pm\infty}F(\tau)\psi$ exists, and then the two limits are equal;
in particular
$$\operatorname*{s-lim}_{t\to\pm\infty}e^{itH/\hbar}e^{-itH_{0}/\hbar} =\operatorname*{s-lim}_{\tau\to\pm\infty}e^{i\tau A}e^{-i\tau A_{0}}$$
in the sense that either strong limit exists exactly when the other does, and
then they are equal;

(e) $\mu^{H}_{\psi}$ is absolutely continuous with respect to Lebesgue measure
if and only if $\mu^{A}_{\psi}$ is, and likewise for singularity with respect
to Lebesgue measure and for absence of atoms; and $\psi\ne0$ is an eigenvector
of $H$ with eigenvalue $\lambda$ if and only if it is an eigenvector of $A$
with eigenvalue $\lambda/c$.

The statement is an operator identity and a statement about spectral measures;
no physical interpretation, no scattering limit and no cross section is
asserted.

## Facts & Assumptions

**Given:** the parameters $m,\hbar>0$ and $c=\hbar^{2}/(2m)$; the real bounded measurable $V$ and $W=V/c$; the operators $A_{0},A,H_{0},H$ of the statement; the choice hypotheses.

[F1] **The free operator and its Sobolev domain.** With $\mathcal F_{2}$ as above and $c_{0}:=2\pi^{2}\hbar^{2}/m$, the operator $\mathcal F_{2}^{*}M_{c_{0}|\xi|^{2}}\mathcal F_{2}$ on $\{f:|\xi|^{2}\mathcal F_{2}f\in L^{2}\}$ is self-adjoint, its domain is $W^{2,2}(\mathbb R^{3};\mathbb C)$, and it acts as $f\mapsto-\frac{\hbar^{2}}{2m}\Delta_{w}f$ ([[lem-nrqm-central-free-operator-differential-identification]] clause (a), [[def-sobolev-space-wkp-and-its-norm]]).

[F2] **Free plus bounded potential.** For $d\ge1$, $c_{0}>0$, $b\in\mathbb R$ and real measurable bounded $V_{0}$, the operator $\mathcal F_{2}^{*}M_{c_{0}|\xi|^{2}+b}\mathcal F_{2}$ is self-adjoint on its stated domain, and $H:=H_{0}+M_{V_{0}}$ is self-adjoint on $D(H_{0})$ ([[thm-nrqm-composites-real-multipliers-and-free-bounded-potential-operators]] clauses (b), (c)).

[F3] **Positive scaling of self-adjoint operators.** For $c_{0}>0$ and a densely defined self-adjoint $A$ on a nonzero complex Hilbert space, the operator $c_{0}A$ with domain $D(A)$ is self-adjoint, $\rho(c_{0}A)=c_{0}\rho(A)$ and $\sigma(c_{0}A)=c_{0}\sigma(A)$ ([[lem-nrqm-potentials-positive-scaling-of-self-adjoint-operators]] clauses (a), (b)).

[F4] **The spectral theorem.** Every self-adjoint operator $T$ on a nonzero complex Hilbert space has a unique regular projection valued measure $E_{T}$ on the Borel $\sigma$-algebra of $\mathbb R$ with $D(T)=\{x:\int\lambda^{2}dE_{T,x}(\lambda)<\infty\}$ and $Tx=\int\lambda\,dE_{T}(\lambda)x$ for $x\in D(T)$; conversely, for a regular projection valued measure $F$ the operator $\int\lambda\,dF$ with that domain is self-adjoint with projection valued measure $F$ ([[thm-spectral-theorem-for-unbounded-self-adjoint-operators]], [[def-projection-valued-measure]]).

[F5] **Bounded and unbounded projection valued integrals.** For a bounded measurable $g$ the operator $\Phi_{E}(g)$ satisfies $\langle\Phi_{E}(g)x,y\rangle=\int g\,dE_{x,y}$ and $\|\Phi_{E}(g)\|\le\|g\|_{\infty}$ ([[thm-bounded-borel-pvm-integral]] clauses 1, 2); for measurable $f$ the operator $f(E)$ has domain $D(f(E))=\{x:\int|f|^{2}dE_{x}<\infty\}$ and is the norm limit of the bounded integrals of the truncations $f\mathbf 1_{\{|f|\le n\}}$ ([[def-unbounded-integral-against-a-pvm]]).

[F6] **The exponential as a projection valued integral.** For self-adjoint $T$ and $t\in\mathbb R$, $e^{itT}=\int e^{it\lambda}\,dE_{T}(\lambda)$ is a strongly continuous one-parameter unitary group with generator $iT$ ([[lem-self-adjoint-operator-generates-a-strongly-continuous-unitary-group]]); this is the bounded functional calculus of [[thm-unbounded-borel-functional-calculus]] applied to the bounded continuous functions $\lambda\mapsto e^{it\lambda}$.

## Proof

**Proof technique:** direct; identify the two operators on their common domain, push the projection valued measure forward along $\lambda\mapsto c\lambda$ and use the uniqueness clause of the spectral theorem, then transfer the exponential and the strong limits by the change of variables $\tau=\hbar t/(2m)$.

**Given:** the data of the statement and [F1]-[F6].

1.1 Applying [F1] with $m=1/2$, $\hbar=1$ gives $c_{0}=4\pi^{2}$ and shows that $A_{0}=\mathcal F_{2}^{*}M_{4\pi^{2}|\xi|^{2}}\mathcal F_{2}$ is self-adjoint with $D(A_{0})=W^{2,2}(\mathbb R^{3};\mathbb C)$ and $A_{0}f=-\Delta_{w}f$. [F1, algebra]

1.2 Multiplying by $c>0$, [F3] clause (a) makes $cA_{0}=H_{0}$ self-adjoint on $D(A_{0})$, and $H_{0}f=-\frac{\hbar^{2}}{2m}\Delta_{w}f$ coincides with the free operator of [F1] at the parameters $m,\hbar$. Since $W$ is real, bounded and measurable, [F2] clause (c) makes $A=A_{0}+M_{W}$ self-adjoint on $D(A_{0})$, and $H=cA$ is self-adjoint on the same domain by [F3] clause (a). On $D(A_{0})$ the identity $cA=cA_{0}+cM_{W}=cA_{0}+M_{cW}=H$ holds, since $cW=V$; this proves (a). [F1, F2, F3, given, algebra]

1.3 For Borel $B\subseteq\mathbb R$ put $F(B):=E_{A}(cB)$. Then $F(\varnothing)=0$ and $F(\mathbb R)=I$; $F(B)$ is an orthogonal projection for every $B$; $F(B\cap B')=E_{A}(cB\cap cB')=E_{A}(cB)E_{A}(cB')=F(B)F(B')$; and for pairwise disjoint $(B_{n})$ the sets $(cB_{n})$ are pairwise disjoint with union $c(\bigcup_{n}B_{n})$, so strong countable additivity of $E_{A}$ gives $F(\bigcup_{n}B_{n})x=\sum_{n}F(B_{n})x$ in norm. Each scalar measure $F_{x}$ is the pushforward of the regular Borel measure $E_{A,x}$ along the homeomorphism $\lambda\mapsto c\lambda$, hence regular; so $F$ is a regular projection valued measure. [F4, algebra]

1.4 Let $\psi,y\in L^{2}$. If $\lim_{\tau\to+\infty}F(\tau)\psi=y$, then for $\epsilon>0$ there is $S$ with $\|F(\tau)\psi-y\|<\epsilon$ for $\tau>S$; since $\tau(t)=\hbar t/(2m)\to+\infty$ as $t\to+\infty$, there is $T$ with $\tau(t)>S$ for $t>T$, so $\|F(\tau(t))\psi-y\|<\epsilon$ for $t>T$. Conversely, if $\lim_{t\to+\infty}F(\tau(t))\psi=y$, let $\epsilon>0$ and $T$ with $\|F(\tau(t))\psi-y\|<\epsilon$ for $t>T$; for $\tau>\tau(T)$ the inverse $\tau\mapsto2m\tau/\hbar$ gives $t(\tau)>T$, so $\|F(\tau)\psi-y\|<\epsilon$. The case $t,\tau\to-\infty$ is identical with reversed inequalities. [given, algebra]

2.1 For a complex simple function $g=\sum_{k}a_{k}\mathbf 1_{B_{k}}$ the definition of the integral gives $\Phi_{F}(g)=\sum_{k}a_{k}F(B_{k})=\sum_{k}a_{k}E_{A}(cB_{k})=\Phi_{E_{A}}(g\circ c)$. For bounded measurable $g$ choose simple $g_{n}$ with $\|g-g_{n}\|_{\infty}\to0$; then $\|g\circ c-g_{n}\circ c\|_{\infty}\to0$, and [F5] clause 1 gives $\Phi_{F}(g)=\lim_{n}\Phi_{F}(g_{n})=\lim_{n}\Phi_{E_{A}}(g_{n}\circ c)=\Phi_{E_{A}}(g\circ c)$. In particular $\langle\Phi_{F}(g)x,x\rangle=\int g(c\lambda)\,dE_{A,x}(\lambda)$ for every $x$. [F5, step 1.3, algebra]

3.1 Taking $g_{n}(\lambda):=\lambda\mathbf 1_{\{|\lambda|\le n\}}$ and using 2.1 with $g=g_{n}$ gives $\int\lambda\mathbf 1_{\{|\lambda|\le n\}}dF=\int c\lambda\mathbf 1_{\{|\lambda|\le n\}}dE_{A}$ for every $n$, and $|\lambda|\mathbf 1_{\{|\lambda|\le n\}}\uparrow|\lambda|$. Hence the domains agree, $\{x:\int\lambda^{2}dF_{x}<\infty\}=\{x:\int c^{2}\lambda^{2}dE_{A,x}<\infty\}=D(A)$, and on it the limit of the bounded truncations is $\int\lambda\,dF=c\int\lambda\,dE_{A}=cA$ by [F5] clause 2. [F5, step 2.1, algebra]

4.1 By 1.3 and 3.1 the operator $T:=\int\lambda\,dF(\lambda)=cA=H$ with domain $D(A)$ is self-adjoint with projection valued measure $F$, by the converse clause of [F4]. Since $H$ is self-adjoint on $D(A)$ by 1.2, the uniqueness clause of [F4] gives $E_{H}=F$, that is $E_{H}(B)=E_{A}(B/c)$ for every Borel $B$, equivalently $E_{H}(cB)=E_{A}(B)$. The same argument with $V=0$ (so that $A=A_{0}$ and $H=H_{0}$) gives $E_{H_{0}}(cB)=E_{A_{0}}(B)$. Taking scalar products gives $\mu^{H}_{\psi}(cB)=\mu^{A}_{\psi}(B)$, and the spectra are $c\sigma(A)$ and $c\sigma(A_{0})$ by [F3] clause (b). This proves (b). [F4, F3, step 3.1, step 1.2, algebra]

5.1 Since $\lambda\mapsto c\lambda$ is a bijection of $\mathbb R$ carrying Lebesgue null sets onto Lebesgue null sets (both it and its inverse are linear with nonzero slope, hence Lipschitz), 4.1 shows that $\mu^{H}_{\psi}$ is absolutely continuous, singular or atomless exactly when $\mu^{A}_{\psi}$ is. For eigenvectors, $H\psi=\lambda\psi$ with $\psi\ne0$ and $\psi\in D(A)$ is equivalent to $E_{H}(\{\lambda\})\psi=\psi$; by 4.1 this is $E_{A}(\{\lambda/c\})\psi=\psi$, i.e. $A\psi=(\lambda/c)\psi$. This proves (e). [F4, step 4.1, algebra]

5.2 For $t\in\mathbb R$ put $\tau=\hbar t/(2m)$, so that $t\lambda/\hbar=\tau\mu$ with $\lambda=c\mu$; by [F6] and the bounded case of 2.1 applied to the bounded measurable function $g(\lambda)=e^{-it\lambda/\hbar}=e^{-i\tau\lambda/c}$ one has $e^{-itH/\hbar}=\int e^{-it\lambda/\hbar}\,dE_{H}(\lambda)=\int e^{-i\tau\mu}\,dE_{A}(\mu)=e^{-i\tau A}$, and the same identity with $H_{0},A_{0}$ gives the second display of (c). [F6, step 2.1, step 4.1, algebra]

6.1 With $F(\tau):=e^{i\tau A}e^{-i\tau A_{0}}$ and $G(t):=e^{itH/\hbar}e^{-itH_{0}/\hbar}$, step 5.2 gives $G(t)=F(\tau(t))$ for every $t$; so step 1.4 shows that the strong limits $\operatorname*{s-lim}_{t\to\pm\infty}G(t)$ and $\operatorname*{s-lim}_{\tau\to\pm\infty}F(\tau)$ exist exactly together and then coincide. This is (d) and completes the proof. [step 5.2, step 1.4, given] ∎

## Remarks

- **Use.** The lemma is the exact bookkeeping that transfers every statement
  proved for the nondimensional operators $-\Delta+M_{W}$ and their free wave
  operators into the physical operators $-\frac{\hbar^{2}}{2m}\Delta+M_{V}$
  and their physical-time wave operators, and it carries the free spectral
  density along the energy rescaling $E=c\lambda$. It asserts nothing about
  the existence of the wave operators themselves; that is the content of the
  scattering existence theorem of the pair.
- **Choice.** The spectral theorem and the projection valued integrals used
  here carry the Axiom of Countable Choice and the Axiom of Choice; no further
  choice principle is used.
