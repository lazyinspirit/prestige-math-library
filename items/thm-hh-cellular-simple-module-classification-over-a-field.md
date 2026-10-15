---
id: thm-hh-cellular-simple-module-classification-over-a-field
kind: theorem
title: "Nonzero cellular heads classify the simple modules over a field"
status: draft
origin: pipeline
pipeline_run: hopf-hecke-unfinished-15-2026-10-15
dependency_level: 8
deps:
  - thm-hh-cell-modules-forms-and-radicals
  - def-hh-cell-datum-dominance-and-cell-ideals
  - lem-hh-finite-matrix-and-module-preliminaries
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-15
sources:
  references:
    - title: "Andrew Mathas, Hecke algebras and Schur algebras of the symmetric group, complete author-uploaded preliminary lecture manuscript (1998)"
      url: "https://web.math.ucsb.edu/~bigelow/books/mathas.pdf"
      locator: "Chapter 2, §§2.9–2.13, PDF pp. 17–18: rank-one action, absolute simplicity, the Hom-order argument, finite-poset completeness, and pairwise distinction. Complete reasoning inspected."
    - title: "Richard Dipper, Gordon James, and Andrew Mathas, Cyclotomic q-Schur algebras, Mathematische Zeitschrift 229 (1998), 385–416"
      url: "https://pnp.mathematik.uni-stuttgart.de/iaz/iaz1/Dipper/papers/cyclo.ps"
      locator: "§3.28–3.30, printed pp. 397–398: the Specht cell-form quotient classification, whose abstract proof is supplied locally here. Full text inspected."
---

## Statement

Let $A$ be a finite-dimensional cellular algebra over a field $F$, with finite cell poset $\Lambda$. For $\lambda\in\Lambda$, let $\Delta(\lambda)$ and its symmetric invariant form be as in [[thm-hh-cell-modules-forms-and-radicals]], and put
$$D(\lambda)=\Delta(\lambda)/\operatorname{rad}\Delta(\lambda).$$
Then every nonzero $D(\lambda)$ is absolutely simple, the nonzero $D(\lambda)$ are pairwise nonisomorphic, and they form a complete set of simple right $A$-modules up to isomorphism.

## Facts & Assumptions

**Given:** A finite-dimensional cellular algebra $A$ over $F$ with finite cell poset $\Lambda$ and the modules and forms in the Statement.

[F1] [[thm-hh-cell-modules-forms-and-radicals]]: each $\Delta(\lambda)$ is a right module; its form is symmetric and invariant; the radical is a submodule; and cell-layer multiplication defines that form.

[F2] [[def-hh-cell-datum-dominance-and-cell-ideals]]: $A^{\ge\lambda}$ and $A^{>\lambda}$ are two-sided ideals, with their indicated cell-basis spans.

[F3] [[lem-hh-finite-matrix-and-module-preliminaries]]: a finite-dimensional vector space has finite bases, kernels, and quotients; scalar extension of a finite matrix preserves its rank when the scalar extension is a field extension.

## Proof

**Given:** The data in the Statement.

1.1 For $x=\sum_t a_t c_t\in\Delta(\lambda)$, the rank-one multiplication identity of [F1] gives$xC^\lambda_{u,v}=\sum_t a_t\langle c_t,c_u\rangle_\lambda c_v=\langle x,c_u\rangle_\lambda c_v.$ If the form is not identically zero, its radical is proper and $D(\lambda)\ne0$. For any $x\notin\operatorname{rad}\Delta(\lambda)$ there is $c_u$ with $\langle x,c_u\rangle\ne0$. Every submodule of $\Delta(\lambda)$ containing such an $x$ contains each basis vector $c_v$, because the action identity is exact and division by the nonzero field scalar gives $c_v=xC^\lambda_{u,v}/\langle x,c_u\rangle$. Thus every submodule not contained in the radical is all of $\Delta(\lambda)$, and the quotient $D(\lambda)$ is simple. [F1, algebra]

2.1 Let $E/F$ be any field extension. The Gram matrix of the form has the same rank over $E$ as over $F$: its rank is characterized by the largest nonzero minor, and a minor in $F$ vanishes in $E$ exactly when it already vanished in $F$. Hence $\operatorname{rad}(\Delta(\lambda)\otimes_F E)=\operatorname{rad}\Delta(\lambda)\otimes_F E$, and $D(\lambda)\otimes_F E$ is nonzero whenever $D(\lambda)$ is. Step 1.1, applied over $E$, proves it simple. Thus it remains simple after every field extension, which is absolute simplicity. [F1, F3, step 1.1]

2.2 Suppose $D(\mu)\ne0$, so the form on $\Delta(\mu)$ is not identically zero. Let $M$ be a proper submodule of $\Delta(\lambda)$ and suppose $\phi:\Delta(\mu)\to\Delta(\lambda)/M$ is nonzero. There is an $x\notin\operatorname{rad}\Delta(\mu)$ with $\phi(x)\ne0$: otherwise, for a fixed $x_0$ outside the radical, each radical vector $z$ is the difference $(x_0+z)-x_0$ of two vectors outside the radical, so $\phi$ would vanish on the whole module. Choose $y=\sum_s b_sc_s$ with $\langle x,y\rangle_\mu=1$ and define $a_t=\sum_s b_sC^\mu_{s,t}\in A^{\ge\mu}$. The rank-one identity gives $xa_t=c_t$, so $\phi(c_t)=\phi(x)a_t$. If $\lambda\not\ge\mu$, then $A^{\ge\lambda}\cap A^{\ge\mu}\subseteq A^{>\lambda}$: a basis shape in the intersection is above both labels, and it cannot equal $\lambda$ without implying $\lambda\ge\mu$. For any cell basis representative of a vector in $\Delta(\lambda)$, multiplying by $a_t$ lies in both ideals, so it acts as zero in $\Delta(\lambda)/M$. Thus every $\phi(c_t)=0$, contradicting $\phi\ne0$. Therefore a nonzero map of this kind forces $\lambda\ge\mu$. [F1, F2, step 1.1, algebra]

3.1 If $D(\lambda)$ and $D(\mu)$ are nonzero and isomorphic, compose the quotient map $\Delta(\mu)\twoheadrightarrow D(\mu)$ with the isomorphism to obtain a nonzero map $\Delta(\mu)\to\Delta(\lambda)/\operatorname{rad}\Delta(\lambda)$. Step 2.2 gives $\lambda\ge\mu$. Reversing the roles gives $\mu\ge\lambda$. Antisymmetry of the cell poset implies $\lambda=\mu$. [F1, step 2.2]

4.1 Choose a linear extension $\lambda_1,\ldots,\lambda_m$ of the finite poset in which every maximal remaining element is listed next. The prefix $U_k=\{\lambda_1,\ldots,\lambda_k\}$ is upward closed, so $J_k=\operatorname{span}\{C^\mu_{s,t}:\mu\in U_k\}$ is an ideal: it is the sum of the ideals $A^{\ge\mu}$ for $\mu\in U_k$. Also $J_k=J_{k-1}+A^{\ge\lambda_k}$, because every label strictly above $\lambda_k$ occurs earlier. Let $S$ be a simple right $A$-module. Since $J_m=A$, choose the least $k$ with $SJ_k\ne0$. Then $SJ_{k-1}=0$ and $SJ_k=S$, so $SA^{\ge\lambda_k}=S$ and $SA^{>\lambda_k}=0$. Choose $s_0\in S$ and $u$ such that $s_0C^{\lambda_k}_{u,v}\ne0$ for some $v$; this is possible because $SA^{\ge\lambda_k}\ne0$ and the cell basis spans that ideal. Define $\psi:\Delta(\lambda_k)\to S$ by $\psi(c_t)=s_0C^{\lambda_k}_{u,t}$. For $a\in A$, the cell axiom gives $C^{\lambda_k}_{u,t}a\equiv\sum_w r_{t,w}(a)C^{\lambda_k}_{u,w}$ modulo $A^{>\lambda_k}$; that higher ideal annihilates $S$, so $\psi(c_ta)=\psi(c_t)a$. The map is a nonzero module map and hence surjective. Choose $t$ with $\psi(c_t)\ne0$. The annihilator $\{x\in S:xA^{\ge\lambda_k}=0\}$ is a submodule because $A^{\ge\lambda_k}$ is a two-sided ideal. It is proper since $SA^{\ge\lambda_k}=S\ne0$, so simplicity makes it zero. Hence $\psi(c_t)A^{\ge\lambda_k}\ne0$; since $SA^{>\lambda_k}=0$, some cell basis element $C^{\lambda_k}_{p,q}$ acts nontrivially on $\psi(c_t)$. If the form on $\Delta(\lambda_k)$ were zero, the rank-one action identity would give $c_tC^{\lambda_k}_{p,q}=0$, contradicting the module-map identity $\psi(c_tC^{\lambda_k}_{p,q})=\psi(c_t)C^{\lambda_k}_{p,q}\ne0$. Thus the form is nonzero and its radical is proper. By step 1.1, every proper submodule of $\Delta(\lambda_k)$ is contained in its radical; since $\ker\psi$ is maximal, it equals the radical. Therefore $S\cong D(\lambda_k)$. [F1, F2, step 1.1, algebra] ∎
