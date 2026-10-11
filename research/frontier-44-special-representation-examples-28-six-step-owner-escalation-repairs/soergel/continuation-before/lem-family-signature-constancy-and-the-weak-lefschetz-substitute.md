---
id: lem-family-signature-constancy-and-the-weak-lefschetz-substitute
kind: lemma
title: "Signature constancy in a Lefschetz family, the L-stable subspace lemma and the weak-Lefschetz substitute"
status: draft
origin: pipeline
pipeline_run: frontier-44-special-representation-examples-28
dependency_level: 5
deps: [def-primitive-subspaces-hard-lefschetz-and-hodge-riemann-signs, lem-hard-lefschetz-implies-primitive-decomposition, thm-sylvesters-law-of-inertia, def-definiteness-inertia-and-signature-data-over-the-reals, def-continuity-real]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  scraped: []
  references:
    - title: "Elias-Williamson, The Hodge theory of Soergel bimodules (arXiv:1212.0791v2, final version; Ann. of Math. 180 (2014) 1089-1136)"
      url: "https://arxiv.org/pdf/1212.0791v2"
      locator: "Section 2, Lemmas 2.1, 2.2, 2.3, 2.5 and Remark 2.4, including the full proof supplied locally for the stable-subspace lemma"
    - title: "Riche, La theorie de Hodge des bimodules de Soergel (d'apres Soergel et Elias-Williamson), Seminaire Bourbaki no. 1139 (arXiv:1711.02464, Octobre 2017)"
      url: "https://arxiv.org/pdf/1711.02464"
      locator: "Section 2.2, Corollaire 2.3 (constance de la signature) and Lemme 2.4 (the substitute for weak Lefschetz)"
verification:
  precheck: pass
---

## Facts & Assumptions

**Given:** A finite-dimensional graded real space $H$ with a graded non-degenerate symmetric form and a symmetric degree-two operator $L$, its primitive subspaces $P_L^{-i}$ and Lefschetz forms $(a,b)_L^{-i}=\langle a,L^ib\rangle$, the hypotheses hL and HR with the standard sign and lowest degree $-d$, as in [[def-primitive-subspaces-hard-lefschetz-and-hodge-riemann-signs]].

[F1] Under hL the primitive decomposition $H=\bigoplus_{i\ge0}\bigoplus_{j=0}^{i}L^jP_L^{-i}$ holds, the Lefschetz forms are non-degenerate, distinct primitive strings are orthogonal for them, and standard HR is equivalent to hL together with the signature formula $\operatorname{sig}(\langle-,L^i-\rangle|_{H^{-i}})=\sum_{k}(-1)^{(d-i-2k)/2}\dim P_L^{-(i+2k)}$; a symmetric form on a finite-dimensional space has an orthogonal basis and its inertia is well defined ([[lem-hard-lefschetz-implies-primitive-decomposition]], [[thm-sylvesters-law-of-inertia]], [[def-definiteness-inertia-and-signature-data-over-the-reals]]).

[F2] A continuous scalar function with nonzero value keeps its sign on a sufficiently small parameter neighborhood, directly from the epsilon-delta condition with epsilon half the absolute value at that parameter ([[def-continuity-real]]). Local constancy of matrix inertia is proved in step 1.1, without a spectral-continuity theorem.

## Statement

(1) **Family lemma.** Let $L_t$, $t\in[a,b]$, be a continuous family of symmetric degree-two operators on $H$, each satisfying hL, and suppose $L_{t_0}$ satisfies HR with the standard sign for one $t_0\in[a,b]$. Then every $L_t$ satisfies HR with the standard sign; in the application the family is $L_\zeta$, $\zeta\ge0$, which is polynomial (hence continuous) in $\zeta$.

(2) **Weak-Lefschetz substitute.** Let $\varphi:V\to W(1)$ be a map of graded $R[L]$-modules such that (a) $\varphi$ is injective in degrees $\le-1$, (b) $V,W$ carry graded forms with $\langle\varphi(a),\varphi(b)\rangle_W=\langle a,Lb\rangle_V$, and (c) $W$ satisfies HR with the standard sign. Then $L^i:V^{-i}\to V^i$ is injective for all $i\ge0$, and if $\dim V^i=\dim V^{-i}$ for all $i$ then $L$ satisfies hL on $V$.

(3) **Sign bookkeeping.** If in (2) the lowest degree of $W$ is $-\ell$ and of $V$ is $-(\ell+1)$, then the Lefschetz form on $V^{-(\ell+1)}$ is $\pm$definite with the same sign as on $W^{-\ell}$, so if $V$ satisfies HR with the standard sign then $V$ has the standard sign if and only if $W$ does.

(4) **Degenerate shifted case.** Let the form on $H$ not be assumed non-degenerate and suppose $L^i:H^{-d-i}\to H^{-d+i}$ is an isomorphism for all $i\ge0$ with $d$ a positive integer. Then the Lefschetz form $(h,h')_L^{-i}=\langle h,L^ih'\rangle$ on $H^{-i}$ is identically zero for every $i\ge0$.

(5) **Stable-subspace lemma.** If $(H,L,\langle-,-\rangle)$ satisfies hL and HR and $V\subseteq H$ is an $L$-stable graded subspace with $\dim V^{-i}=\dim V^i$ for all $i$, then the restricted operator and form satisfy hL and HR on $V$ with the ambient degree-by-degree signs; the restricted form is non-degenerate, and its standard global sign agrees with the ambient standard sign if the lowest nonzero degrees agree.

## Proof

**Proof technique:** direct; continuous signature families and primitive-string bookkeeping.

1.1 **The family lemma (1).** Fix $i\ge0$ and consider the family of symmetric forms $(a,b)\mapsto\langle a,L_t^ib\rangle$ on the fixed space $H^{-i}$. For each $t$ it is non-degenerate, because hL makes $L_t^i:H^{-i}\to H^i$ an isomorphism and the ambient form pairs $H^i$ perfectly with $H^{-i}$; and it depends continuously on $t$ because $L_t$ does. At any parameter $t_*$, fix a real congruence diagonalizing its nonsingular matrix by [F1]. In this fixed basis all leading pivots at $t_*$ are nonzero. Symmetric elimination expresses successive pivots as continuous rational functions of the matrix entries near $t_*$; the denominators stay nonzero, and continuity of these finite sums, products and reciprocals follows by the elementary epsilon estimates for real arithmetic. By [F2], every pivot keeps its sign on a common neighborhood, so Sylvester inertia and hence signature are locally constant. A locally constant function on an interval is constant: otherwise the supremum of the initial interval on which its value agrees with the starting value contradicts local constancy at that supremum. Thus the signature is constant on $[a,b]$. At $t_0$ the primitive decomposition of $L_{t_0}$ is orthogonal for this form with definite primitive blocks, so the signature at every $t$ equals the $t_0$ signature. Moreover the primitive dimensions are the same for every $t$: $\dim P_{L_t}^{-i}=\dim H^{-i}-\dim H^{-i-2}$ for all $t$, by the string decomposition of [F1] applied to each $L_t$. Descending induction on $i$ from the top degree in the signature formula of [F1] now shows that the primitive Lefschetz forms of $L_t$ have the $t_0$-signs for every $t$: at the top nonzero degree the signature of $H^{-i}$ is the signature of the primitive form, and inductively subtract the contributions of the already-determined higher primitive spaces, whose dimensions do not depend on $t$. Orthogonality and hL make the primitive forms non-degenerate, and the signature subtraction forces their signatures to be the prescribed signs times their dimensions. Sylvester inertia then gives the standard-sign definiteness for every $t$. In the application $L_\zeta=L_0+\zeta M$ with $M$ the middle-position operator is polynomial in $\zeta$, hence continuous on $[0,\infty)$ and on every compact subinterval. This proves (1). [given, F1, F2]

2.1 **The weak-Lefschetz substitute, injectivity (2).** For $i=0$ the map $L^0$ is the identity. Let $i\ge1$ and $0\ne a\in V^{-i}$; then $-i\le-1$, so $\varphi(a)\ne0$ by (a). If $L^i\varphi(a)\ne0$, then $L^i a\ne0$ because $L^i\varphi(a)=\varphi(L^i a)$ (the map is $R[L]$-linear). Otherwise $L^i\varphi(a)=0$, so $\varphi(a)$ is a nonzero primitive vector in $W^{-i+1}$; the HR relations of $W$ give that the Lefschetz value $(\varphi(a),\varphi(a))_L^{-i+1}=\langle\varphi(a),L^{i-1}\varphi(a)\rangle_W$ is definite nonzero. By (b) this equals $\langle a,L^ia\rangle_V$; in particular $L^ia\ne0$. Hence $L^i$ is injective in both cases. If moreover $\dim V^{-i}=\dim V^i$ for all $i$, injectivity plus equality of finite dimensions makes each $L^i:V^{-i}\to V^i$ an isomorphism, which is hL on $V$. This proves (2). [step 1.1, given, F1]

3.1 **Sign bookkeeping (3).** In the situation of step 2.1 with $i=\ell+1$, one has $-i+1=-\ell$, the lowest degree of $W$, and the image of $V^{-(\ell+1)}$ lies in $W^{-\ell}$, whose $(\ell+1)$-st power under $L$ is zero because $W^{\ell+2}=0$. Thus the primitive branch of step 2.1 applies to every such image and shows that the Lefschetz form on $V^{-(\ell+1)}$ is definite with the sign of the primitive form of $W$ in degree $-\ell$, which is the sign prescribed by the standard-sign HR of $W$; the global factor of the HR statement of $V$, if any, is thereby fixed, and $V$ has the standard sign exactly when $W$ does. This proves (3). [step 2.1, F1]

4.1 **The degenerate shifted case (4).** Put $Q_L^{-d-i}:=\ker(L^{i+1}|_{H^{-d-i}})\subseteq H^{-d-i}$ for $i\ge0$, and $Q^{-d-i}_L:=0$ for $i<0$. The hypothesis that $L^i:H^{-d-i}\to H^{-d+i}$ is an isomorphism for all $i\ge0$ gives the shifted primitive decomposition $H^m=\bigoplus_{j\ge0}L^jQ_L^{m-2j}$ by the same string argument as the primitive decomposition of [F1], with the centering shifted by $d$. Fix $m\le0$, $x\in Q^{m-2j}_L$, $y\in Q^{m-2k}_L$ with $j\ge k\ge0$; then $(L^jx,L^ky)_L^m=\langle x,L^{j+k-m}y\rangle$. Now $y\in Q^{m-2k}_L=\ker(L^{i+1})$ with $-d-i=m-2k$, i.e. $i=2k-m-d$, so $y$ is killed by $L^{2k-m-d+1}$; and $j+k-m\ge 2k-m-d+1$ because $j\ge k\ge k-d+1$ as $d>0$. Hence the pairing vanishes for arbitrary primitive vectors and arbitrary blocks, so the Lefschetz form on $H^m$ is identically zero. This proves (4). [step 3.1, given, F1, algebra]

5.1 **The stable-subspace lemma (5).** Let $V\subseteq H$ be $L$-stable with symmetric dimensions. Since $L^i:H^{-i}\to H^i$ is injective, its restriction to $V^{-i}$ is injective, and the dimension equality makes it an isomorphism onto $V^i$; so $V$ satisfies hL. The primitive subspace of $V$ is $P_V^{-i}=V^{-i}\cap P_L^{-i}$, because the kernel of $L^{i+1}$ on $V^{-i}$ is the intersection of $V^{-i}$ with the kernel on $H^{-i}$; the restricted Lefschetz form on $P_V^{-i}$ is the restriction of the ambient definite primitive form, hence definite with the ambient sign $(-1)^{(d-i)/2}$. By the primitive decomposition applied inside $V$ (step 2.1 of [[lem-hard-lefschetz-implies-primitive-decomposition]] gives it from hL on $V$), the restricted form on $V$ is an orthogonal sum of definite blocks, hence non-degenerate, and its signs are the ambient signs; if the lowest nonzero degree of $V$ is $-d$, the ambient standard sign is also the standard sign of $V$. This proves (5) and completes the lemma; no choice principle is used. [step 2.1, step 3.1, step 4.1, F1, F2] ∎

## Remarks

- The family lemma is the only place where continuity enters the page: the parametrised operators $L_\zeta$ are polynomial in $\zeta$, so continuity on compact subintervals is automatic; no analytic hypothesis beyond [F2] is needed.
- In the weak-Lefschetz substitute the injectivity in degrees $\le-1$ is used only through $\varphi(a)\ne0$ for $a\ne0$ in nonzero negative degrees; the degree bound of the target shift $W(1)$ is what makes the pairing computation land on the Lefschetz form at the correct degree.
