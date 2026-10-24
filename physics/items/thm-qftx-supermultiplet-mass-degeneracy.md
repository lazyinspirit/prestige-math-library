---
id: thm-qftx-supermultiplet-mass-degeneracy
kind: theorem
title: Mass is constant on an irreducible positive super-Poincare representation
status: draft
origin: pipeline
pipeline_run: advanced-qft-supersymmetry-build-2026-10-23
domain: mathematics
library: mathematics
category: quantum-field-theory-mathematics
deps:
  - def-qftx-unitary-super-poincare-representation
  - def-projection-valued-measure
  - lem-scalar-and-complex-measures-from-a-pvm
  - def-countable-choice
  - thm-of-square-roots
dependency_roles:
  def-qftx-unitary-super-poincare-representation: mathematical-premise
  def-projection-valued-measure: mathematical-premise
  lem-scalar-and-complex-measures-from-a-pvm: mathematical-premise
  def-countable-choice: mathematical-premise
  thm-of-square-roots: mathematical-premise
dependency_level: 2
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "Stephen P. Martin, A Supersymmetry Primer, version 7"
      url: "https://arxiv.org/pdf/hep-ph/9709356v7"
      locator: "§1, printed pp. 5–6, mass equality within a supermultiplet; the local proof adds exact PVM and charge-domain hypotheses."
    - title: "S. J. Gates Jr., M. T. Grisaru, M. Roček and W. Siegel, Superspace, or One Thousand and One Lessons in Supersymmetry"
      url: "https://arxiv.org/pdf/hep-th/0108200"
      locator: "§3.3, printed pp. 69–73, Poincare mass as a Casimir in particle representations; the local proof avoids a sharp-momentum vector."
verification:
  precheck: pending
---

## Statement

Let $\mathcal H$ carry an irreducible positive unitary super-Poincare representation with metric $\eta=\operatorname{diag}(-1,1,1,1)$, future-cone support and the charge-domain reduction conditions stated in its definition. Let $\mathcal C_+^*$ be the closed future cone from the representation definition and define $s:\mathcal C_+^*\to[0,\infty)$ by $s(p)=-\eta^{\mu\nu}p_\mu p_\nu$. For Borel $A\subseteq[0,\infty)$ define $F(A)=E(\{p\in\mathcal C_+^*:s(p)\in A\})$. Then every supercharge and its adjoint reduce each mass-squared spectral subspace: if $\psi\in D(Q)\cap\operatorname{ran}F(A)$ then $Q\psi\in\operatorname{ran}F(A)$, and the same holds for $Q^*$. Moreover there is a unique $m^2\ge0$ such that $F(A)=I$ when $m^2\in A$ and $F(A)=0$ when $m^2\notin A$. Thus the nonnegative mass $m=\sqrt{m^2}$ is constant throughout the irreducible multiplet. Use natural units $\hbar=c=1$, so $m$ has mass dimension one and $m^2$ has mass dimension two. For a nonzero supercharge image, the source and image lie in the same mass spectral sector. No sharp-momentum eigenvector or rest frame is assumed in the full Hilbert space. If an additional group acts unitarily and commutes with the supercharges on their invariant domains, each supercharge also intertwines that group action; no gauge-charge conclusion is asserted without this extra hypothesis.

## Statement references

[Martin, §1](https://arxiv.org/pdf/hep-ph/9709356v7).

[Gates et al., §3.3](https://arxiv.org/pdf/hep-th/0108200).

Positive unitary super-Poincare representation with spectral-domain covariance: [[def-qftx-unitary-super-poincare-representation]].

Projection valued measure: [[def-projection-valued-measure]].

Scalar and complex measures from a pvm: [[lem-scalar-and-complex-measures-from-a-pvm]].

The Axiom of Countable Choice ($\mathrm{AC}_\omega$): [[def-countable-choice]].

Square roots exist: a unique $\sqrt{a} \ge 0$ with $(\sqrt{a})^2 = a$; the positives are $\{x^2 : x \neq 0\}$: [[thm-of-square-roots]].

## Facts & Assumptions

**Given:** An irreducible positive unitary super-Poincare representation as in the Statement, and its joint momentum PVM $E$.

[F1] [[def-qftx-unitary-super-poincare-representation]]: $E$ is a joint PVM with future-cone support, it is covariant under the even Lorentz group, it commutes with translations, and every charge and adjoint has the stated reducing-projection/domain property for each $E(B)$.

[F2] [[def-projection-valued-measure]]: each $E(B)$ is an orthogonal projection and $E$ is strongly countably additive on disjoint Borel sets.

[F3] [[lem-scalar-and-complex-measures-from-a-pvm]]: for any unit vector $\psi$, $\mu_\psi(A)=\langle F(A)\psi,\psi\rangle$ is a countably additive probability measure once $F$ is a normalized PVM.

[F4] [[thm-of-square-roots]]: every nonnegative real number has a unique nonnegative square root.

[A1] Assume Countable Choice, as required by the PVM and scalar-measure suppliers used here ([[def-countable-choice]]).

## Proof


**Given:** $\mathcal H$, $U$, $\Gamma$, the charge operators, and $E$ as in [F1].

1.1 The function $s(p)=-\eta^{\mu\nu}p_\mu p_\nu=(p^0)^2-|\vec p|^2$ is continuous and nonnegative on the closed future cone in [F1]. For each Borel $A\subseteq[0,\infty)$, $\{p\in\mathcal C_+^*:s(p)\in A\}$ is Borel in the full covector space because $\mathcal C_+^*$ is closed and $s$ is continuous there. Inverse images preserve disjoint unions, and the preimage of $[0,\infty)$ is $\mathcal C_+^*$, whose projection is $I$ by [F1]; therefore the pushforward $F(A):=E(\{p\in\mathcal C_+^*:s(p)\in A\})$ is a normalized PVM on $[0,\infty)$ by strong countable additivity of $E$. [A1, F1, F2, algebra]

2.1 For each Borel $A$, $F(A)$ is the projection $E(\{p\in\mathcal C_+^*:s(p)\in A\})$. The charge-domain reduction in [F1] therefore gives $F(A)D(Q)\subseteq D(Q)$ and $QF(A)\psi=F(A)Q\psi$ for every $\psi\in D(Q)$; the same argument applies to $Q^*$. This proves the spectral-subspace assertion. [F1, step 1.1]

2.2 The determinant formula in [F1] and $\det g=1$ give $\det\Phi(\Lambda_gx)=\det(g\Phi(x)g^\dagger)=\det\Phi(x)$, hence $\eta_{\mu\nu}(\Lambda_gx)^\mu(\Lambda_gx)^\nu=\eta_{\mu\nu}x^\mu x^\nu$. Polarization of this quadratic identity gives $\Lambda_g^{\mathsf T}\eta\Lambda_g=\eta$. By the dual-action definition in [F1], a covector column transforms as $(\Lambda_g^{-1})^{\mathsf T}p$; the inverse-metric identity $\Lambda_g^{-1}\eta^{-1}(\Lambda_g^{-1})^{\mathsf T}=\eta^{-1}$ therefore gives $s(\Lambda_g^\vee p)=s(p)$. Under the metric identification $p^\sharp=\eta^{-1}p$, this dual action satisfies $(\Lambda_g^\vee p)^\sharp=\Lambda_g p^\sharp$; preservation of the future vector cone therefore gives preservation of $\mathcal C_+^*$. Lorentz covariance of $E$ now implies $U(g,0)F(A)U(g,0)^*=F(A)$. Translation unitaries are bounded Borel functions of $E$, so they commute with every $F(A)$; $\Gamma$ commutes with $E$ by [F1]. Hence $\operatorname{ran}F(A)$ is closed and graded, invariant under the integrated even group, and invariant under every charge and adjoint with dense restricted domains: density follows by applying the bounded projection $F(A)$ to a dense operator domain. Irreducibility as defined in [F1] forces $F(A)=0$ or $F(A)=I$. [F1, step 1.1, algebra]

3.1 Choose any nonzero vector and normalize it to a unit vector $\psi\in\mathcal H$; set $\mu(A)=\langle F(A)\psi,\psi\rangle$. By [F3] this is a countably additive probability measure, and by step 2.2 every value is $0$ or $1$. For any measurable sets $A_n$, define disjoint $C_n=A_n\setminus\bigcup_{k<n}A_k$. If $C\subseteq A$, countable additivity on $A=C\sqcup(A\setminus C)$ gives $\mu(C)\le\mu(A)$; hence $\mu(\bigcup_n A_n)=\sum_n\mu(C_n)\le\sum_n\mu(A_n)$. Thus countable subadditivity is available here from countable additivity and nonnegativity, without an additional supplier. The set $R=\{r\ge0:\mu([0,r])=1\}$ is nonempty: otherwise countable subadditivity applied to $[0,\infty)=\bigcup_{n\ge1}[0,n]$ would give $\mu([0,\infty))=0$, contradicting that $\mu$ is a probability measure. Put $m^2=\inf R$, which is a finite nonnegative real. [A1, F1, F3, step 2.2, choose]

4.1 For every $\varepsilon>0$, the infimum property gives $r\in R$ with $r<m^2+\varepsilon$, so $\mu([0,m^2+\varepsilon])=1$. If $m^2>\varepsilon$, then $m^2-\varepsilon<m^2$ is not in $R$, and the zero-or-one property gives $\mu([0,m^2-\varepsilon])=0$. Thus for all sufficiently large $n$, the nested intervals $I_n=(\max(0,m^2-1/n),m^2+1/n]$ have measure one; when $m^2=0$, use $I_n=[0,1/n]$. Here is the needed continuity-from-above argument. If $(D_n)_{n\ge n_0}$ is any decreasing sequence of measurable sets with $\mu(D_{n_0})<\infty$, put $C_n=D_n\setminus D_{n+1}$. Then the $C_n$ are disjoint and $D_k=(\bigcap_{n\ge n_0}D_n)\sqcup\bigcup_{n\ge k}C_n$ for each $k\ge n_0$. Countable additivity gives $\mu(D_k)=\mu(\bigcap_{n\ge n_0}D_n)+\sum_{n\ge k}\mu(C_n)$. Since $\bigcup_{n\ge n_0}C_n\subseteq D_{n_0}$, monotonicity of $\mu$ from step 3.1 bounds the series by $\mu(D_{n_0})<\infty$; its tails therefore tend to zero. Thus $\lim_k\mu(D_k)=\mu(\bigcap_{n\ge n_0}D_n)$. Apply this to the tail $(I_n)_{n\ge n_0}$ on which $\mu(I_n)=1$; its intersection is $\{m^2\}$, so $\mu(\{m^2\})=\lim_{n\ge n_0}\mu(I_n)=1$. Therefore $F(\{m^2\})\ne0$, and step 2.2 forces $F(\{m^2\})=I$. If $A$ contains $m^2$, monotonicity gives $F(A)=I$; if not, then $\mu(A)=0$ because $A$ is disjoint from $\{m^2\}$, so the zero-or-one property gives $F(A)=0$. This rule also proves uniqueness: any second value with projection $I$ would have to equal $m^2$, since the singleton projections for distinct values are orthogonal. [A1, F1, F3, step 2.2, step 3.1]

5.1 By [F4], $m^2$ has a unique nonnegative square root $m$. Step 2.1 shows that each charge maps vectors in a fixed mass-squared subspace into that same subspace; step 4.1 shows there is only one such spectral value in the irreducible representation. The argument uses the pushforward PVM rather than a normalizable sharp-momentum vector, and it includes $m=0$ without introducing a rest frame. [F4, step 2.1, step 4.1]

6.1 If an additional unitary group $V(g)$ preserves $D(Q)$ and satisfies $V(g)Q\psi=QV(g)\psi$ there, then for every $\psi\in D(Q)$ one has $V(g)(Q\psi)=Q(V(g)\psi)$; this is exactly the intertwining relation. Without that additional commutation hypothesis no gauge representation equality follows. [given, algebra] ∎
## Remarks

The theorem fixes the invariant-mass support of an irreducible representation and the mass sector of every nonzero supercharge image. It asserts no multiplicity formula and no physical particle existence or stability result.
