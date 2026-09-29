---
id: lem-cauchy-transform-with-smooth-parameters
kind: lemma
title: Local Cauchy transform with smooth parameters
status: draft
origin: pipeline
deps:
  - def-bigraded-complex-differential-forms
  - thm-cauchy-pompeiu-formula
  - def-axiom-of-choice
  - lem-manifold-bump-for-a-compact-set-inside-an-open-set
justified_by: []
landmark: false
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Lebl, Tasty Bits of Several Complex Variables, v4.4, Chapter 4 §4.4"
      url: https://www.jirka.org/scv/scv.pdf
      locator: "Lemma 4.4.6 and its proof, printed pp. 140–142 (PDF pp. 140–141); parameter smoothness and the several-variable extension are derived explicitly here."
    - title: "Guillemin and Campbell, MIT 18.117 Lecture Notes, Lectures 1–4"
      url: https://ocw.mit.edu/courses/18-117-topics-in-several-complex-variables-spring-2005/3e8b0c3499d6226959485ace042cdaab_18117notes.pdf
    - title: "Jabbari, Notes for Analysis and Geometry of Several Complex Variables, §3.2"
      url: https://www.cimat.mx/~mohammad.jabbari/course-SCV.pdf
verification:
  precheck: pass
---

## Statement

Assume AC. Let $P=D_1\times\cdots\times D_n\subseteq\mathbb C^n$ be a
polydisc, fix $1\le k\le n$, and let $D_k'\Subset D_k$ be a closed coordinate
disc. There are an open coordinate disc $D_k''$ with
$D_k'\subset D_k''\Subset D_k$ and a cutoff
$\chi\in C_c^\infty(D_k)$ equal to $1$ on $D_k''$ such that the operator

$$T_k g(z)=\frac{1}{2\pi i}\int_{\mathbb C}\frac{\chi(\zeta)\,g(z_1,\ldots,z_{k-1},\zeta,z_{k+1},\ldots,z_n)}{\zeta-z_k}\,d\zeta\wedge d\bar\zeta$$

is smooth on $P''=D_1\times\cdots\times D_k''\times\cdots\times D_n$ for
every $g\in C^\infty(P)$. On $P''$,
$\partial_{\bar z_k}T_k g=g$. If $\partial_{\bar z_\ell}g=0$ for a selected
set of indices $\ell\ne k$, then
$\partial_{\bar z_\ell}T_k g=0$ for each of them.

For $g\in C_c^\infty(\mathbb C^n)$ the same operator without $\chi$ is
globally smooth and satisfies
$\partial_{\bar z_k}T_k g=g$ and
$\partial_{\bar z_\ell}T_k g=T_k(\partial_{\bar z_\ell}g)$ for every
$\ell\ne k$.

## Facts & Assumptions

**Given:** Assume AC; $P$ is an open polydisc, $D_k'\Subset D_k$, and $g$ is
smooth on $P$ or compactly supported smooth on $\mathbb C^n$.

[F1] A compact subset of an open set admits a smooth cutoff equal to $1$ on a
neighborhood and supported inside that open set
([[lem-manifold-bump-for-a-compact-set-inside-an-open-set]]).

[F2] Full AC means every family of nonempty sets has a choice function
([[def-axiom-of-choice]]), and the Cauchy–Pompeiu theorem explicitly assumes AC
([[thm-cauchy-pompeiu-formula]]).

[F3] Under its stated hypotheses, Cauchy–Pompeiu expresses $f(z)$ as the
boundary Cauchy integral plus the area integral of
$\partial_{\bar\zeta}f(\zeta)/(\zeta-z)$
([[thm-cauchy-pompeiu-formula]]).

[F4] The coefficient formula for $\bar\partial$ uses the partial derivatives
$\partial_{\bar z_j}$ on the coefficients
([[def-bigraded-complex-differential-forms]]).

## Proof

**Proof technique:** direct.

1.1 Apply [F1] on the manifold $\mathbb C$ to $K=D_k'$ and $W=D_k$, obtaining $\chi\in C_c^\infty(D_k)$ equal to $1$ on an open neighborhood of $D_k'$. Compact containment lets us choose an open coordinate disc $D_k''$ containing $D_k'$ with closure inside that neighborhood. For fixed $z'=(z_1,\ldots,\widehat z_k,\ldots,z_n)$, extend $h(z',\zeta)=\chi(\zeta)g(z',\zeta)$ by zero from $D_k$ to $\mathbb C$; the extension is smooth and supported in the fixed compact set $K_0=\operatorname{supp}\chi$. [F1, given, construct]

1.2 In the local integral change variables $\eta=\zeta-z_k$ and write $\widetilde h(z,\eta)=h(z',z_k+\eta)$, so $T_k g(z)=\frac{1}{2\pi i}\int_{\mathbb C}\widetilde h(z,\eta)\eta^{-1}\,d\eta\wedge d\bar\eta$. For any compact parameter set $Q\Subset P''$, the support of $\widetilde h$ and all its real parameter derivatives lies in a common disk $|\eta|\le R$, since $K_0$ and the $z_k$-projection of $Q$ are compact. Also $\int_{|\eta|\le R}|\eta|^{-1}\,dA(\eta)=2\pi R$, so these integrals converge absolutely. For each real-coordinate multi-index $\alpha$ set $F_\alpha(z)=\frac{1}{2\pi i}\int_{\mathbb C}(D_z^\alpha\widetilde h)(z,\eta)\eta^{-1}\,d\eta\wedge d\bar\eta$. Fix a real parameter coordinate $t$. The fundamental theorem of calculus writes the difference between the difference quotient of $D_z^\alpha\widetilde h$ in $t$ and $D_tD_z^\alpha\widetilde h$ as an average of increments of the latter derivative; on $Q\times\{|\eta|\le R\}$ their supremum tends to zero with the increment by uniform continuity on a slightly larger compact set. Thus $|[F_\alpha(z+se_t)-F_\alpha(z)]/s-F_{\alpha+e_t}(z)|\le C\omega_\alpha(|s|)\int_{|\eta|\le R}|\eta|^{-1}dA(\eta)\to0$, where $\omega_\alpha(\delta)\to0$ is that uniform-continuity modulus and $C$ accounts for the fixed form factor. The same estimate gives continuity of each $F_\alpha$, and induction proves $D_z^\alpha T_k g=F_\alpha$ for every $\alpha$, hence $T_k g\in C^\infty(P'')$. [given, algebra]

2.1 The transformed formula in step 1.2 and [F4] identify $\partial_{\bar z_k}T_k g$ with the integral of $\partial_{\bar\zeta}h(z',\zeta)/(\zeta-z_k)$ against $(2\pi i)^{-1}d\zeta\wedge d\bar\zeta$. For each fixed $z'$, choose a bounded disc $E\subset\mathbb C$ containing both $\operatorname{supp}h(z',\cdot)$ and $D_k''$; the slice is zero near $\partial E$. Full AC and the Cauchy–Pompeiu premise are both in [F2], so [F3] on $E$ has zero boundary term and gives this integral equal to $h(z',z_k)=g(z)$ on $P''$, because $\chi=1$ there. Thus $\partial_{\bar z_k}T_k g=g$. [F2, F3, F4, step 1.2, given, algebra]

2.2 For $\ell\ne k$, the cutoff $\chi(\zeta)$ is independent of $z_\ell$, so parameter differentiation in step 1.2 and [F4] give $\partial_{\bar z_\ell}T_k g=T_k(\partial_{\bar z_\ell}g)$, with the single cutoff factor already included in $T_k$. If $\partial_{\bar z_\ell}g=0$, this is zero, proving preservation of each selected equation. [F4, step 1.2, given, algebra]

2.3 If $g\in C_c^\infty(\mathbb C^n)$, omit the cutoff and put $h=g$. On any compact parameter set, compact support of $g$ and boundedness of $z_k$ again place the translated numerator and every derivative in a common bounded $\eta$-disc. The uniform-continuity estimate of step 1.2 therefore proves that the global integral defines a smooth function. [step 1.2, given, algebra]

3.1 For fixed values of the other variables, the slice $g(z',\cdot)$ is compactly supported. Its translated parameter derivative is $T_k(\partial_{\bar z_k}g)$, and the Cauchy–Pompeiu argument of step 2.1, using the AC premise and formula [F2, F3], gives $\partial_{\bar z_k}T_k g=g$. For every $\ell\ne k$, the same differentiation calculation as in step 2.2 gives $\partial_{\bar z_\ell}T_k g=T_k(\partial_{\bar z_\ell}g)$. [F2, F3, F4, step 2.1, step 2.2, step 2.3, given, algebra] ∎
