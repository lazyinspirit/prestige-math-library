---
id: lem-author-3cde9692a7e9-first-class-and-coefficients
kind: lemma
title: First-class matching and explicit perfect Chern arithmetic
status: published
domain: mathematics
deps:
  - lem-adjudicate-2ec9cc32fdc8-qcqs-perfect-cartan
  - lem-adjudicate-2ec9cc32fdc8-qcqs-free-class-detection
  - prop-first-chern-determinant
  - lem-author-ec13f1db88a5-global-picard-projection
  - thm-author-16f30f6b95cb-lowweight-determinant-one-type-input
  - thm-author-3cde9692a7e9-universal-grass-input
  - def-total-chern-class
  - lem-third-order-chern-inversion
  - math:def-axiom-of-choice
  - thm-author-d026a7b99ace-universal-chern-space
  - def-vector-bundle-classes
dependency_roles:
  lem-adjudicate-2ec9cc32fdc8-qcqs-perfect-cartan: mathematical-premise
  lem-adjudicate-2ec9cc32fdc8-qcqs-free-class-detection: mathematical-premise
  prop-first-chern-determinant: mathematical-premise
  lem-author-ec13f1db88a5-global-picard-projection: mathematical-premise
  thm-author-16f30f6b95cb-lowweight-determinant-one-type-input: mathematical-premise
  thm-author-3cde9692a7e9-universal-grass-input: mathematical-premise
  def-total-chern-class: mathematical-premise
  lem-third-order-chern-inversion: mathematical-premise
  math:def-axiom-of-choice: mathematical-premise
  thm-author-d026a7b99ace-universal-chern-space: mathematical-premise
  def-vector-bundle-classes: mathematical-premise
provenance:
  statement: ai-generated
  proof: ai-generated
proof_strategy: direct
dependency_level: 27
formulation_deps:
  - lem-adjudicate-2ec9cc32fdc8-qcqs-perfect-cartan
  - lem-adjudicate-2ec9cc32fdc8-qcqs-free-class-detection
  - prop-first-chern-determinant
  - lem-author-ec13f1db88a5-global-picard-projection
  - thm-author-16f30f6b95cb-lowweight-determinant-one-type-input
  - thm-author-3cde9692a7e9-universal-grass-input
  - def-total-chern-class
  - math:def-axiom-of-choice
  - thm-author-d026a7b99ace-universal-chern-space
  - def-vector-bundle-classes
argument_deps:
  - lem-adjudicate-2ec9cc32fdc8-qcqs-perfect-cartan
  - lem-adjudicate-2ec9cc32fdc8-qcqs-free-class-detection
  - prop-first-chern-determinant
  - lem-author-ec13f1db88a5-global-picard-projection
  - thm-author-16f30f6b95cb-lowweight-determinant-one-type-input
  - thm-author-3cde9692a7e9-universal-grass-input
  - def-total-chern-class
  - lem-third-order-chern-inversion
  - math:def-axiom-of-choice
  - thm-author-d026a7b99ace-universal-chern-space
  - def-vector-bundle-classes
---

## Statement
Assume the Axiom of Choice and the compatible site-size and universe bounds required by the supplied perfect K-theory, motivic and derived-section constructions. Let $k$ be any field and $X$ any qcqs $k$-scheme. The first operation $C_1$ of the specified actual universal perfect Chern construction induces exactly the completed perfect first class $c_1^{\rm perf}$ on $K_0(X)=\pi_0K_{\rm Perf}(X)$. The total operations satisfy Cartan in this qcqs scope. Their second coefficient therefore satisfies, for all perfect classes $x,y\in K_0(X)$,
$$c_2(x+y)=c_2(x)+c_1^{\rm perf}(x)c_1^{\rm perf}(y)+c_2(y).$$
It also satisfies $c_2(-y)=(c_1^{\rm perf}(y))^2-c_2(y)$. If the first classes of $x,y$ agree, then $c_2(x-y)=c_2(x)-c_2(y)$. The total operations restrict to the existing virtual bundle series under the canonical map $K^0_{\rm vb}(X)\to K_0(X)$, without presuming surjectivity. In particular every assertion applies on normal qcqs schemes in the original article's scope, with no noetherian, finite-type or dimension restriction. Here $K^0_{\rm vb}(X)$ is the group on finite locally free bundles modulo exact-sequence relations, and the $i$th coefficient lies in $H^{2i,i}_{\rm mot}(X,\mathbb Z)$.

## Facts & Assumptions
[A1] Assume the Axiom of Choice as formulated in [[math:def-axiom-of-choice]] and the compatible site-size and universe bounds in the Statement. They are inherited through the actual qcqs comparisons and Chern construction in [F1]–[F2] at step 1.1 and their consequences at steps 2.1–3.1. The formal finite-coefficient algebra adds no additional choice assumption. The same inherited bounds apply to the bundle-class construction in [F4] and the universal extension in [F5] used at steps 1.1 and 4.1.

[F1] [[lem-adjudicate-2ec9cc32fdc8-qcqs-perfect-cartan]] supplies the coefficientwise Cartan identities both for the ordinary operations and for their further localizations, and the total-series homomorphism in the original coefficient values on every qcqs field-scheme. [[lem-adjudicate-2ec9cc32fdc8-qcqs-free-class-detection]] supplies detection from the actual local free-class arrow into the further localized coefficient model. Its local detection is used at step 1.1; recovery of the original first-coefficient identity uses the weight-one 1-type argument at step 2.1.

[F2] [[lem-author-ec13f1db88a5-global-picard-projection]] and [[thm-author-16f30f6b95cb-lowweight-determinant-one-type-input]] identify the actual rank-zero first-layer map with the extended perfect determinant/Picard stack map, retaining line-frame-torsor descent and true/enhanced cofiber coherence. [[prop-first-chern-determinant]] identifies the completed perfect first class on every qcqs field-scheme with this determinant followed by the original EM orientation, and agrees with the actual bundle first class. [[thm-author-3cde9692a7e9-universal-grass-input]] supplies universal-class detection and fixed-weight stabilization, including mapping homotopy degrees zero and one, over every qcqs base. The extended determinant's true/enhanced cofiber additivity gives its split-direct-sum tensor identity as an identity of stack maps, retaining line isomorphisms and descent. Its value on the trivial integer-rank section is canonically the tensor unit, including negative ranks by tensor inversion.

[F3] [[def-total-chern-class]] and [[lem-third-order-chern-inversion]] supply the existing virtual bundle normalization and the formal multiplication/inversion formulas. Only the formal-series arithmetic is needed here; arbitrary perfect classes need not be globally bundle-representable.

[F4] Formulation and the bundle-to-perfect arrow use the existing interfaces above and [[def-vector-bundle-classes]]. A qcqs scheme is quasi-compact and quasi-separated: every open cover has a finite subcover, and the intersection of two affine opens is quasi-compact. A $k$-scheme includes its specified morphism to $\operatorname{Spec}k$. A bundle is a finite locally free $\mathcal O_X$-module. A perfect complex is locally equivalent to a bounded complex of such modules; $K_{\rm Perf}(X)=\Omega^\infty\mathbb K(\operatorname{Perf}(X))$ is the supplied perfect K-space, with addition induced by direct sum, and $K_0(X)$ is its group of components. The bundle-class interface supplies $[E]=[E[0]]$ and the cofiber Grothendieck presentation of this group. An exact sequence $0\to E'\to E\to E''\to0$ of bundles gives the cofiber sequence $E'[0]\to E[0]\to E''[0]$ in that perfect category: the natural map from the cone of the injection to $E''[0]$ is a quasi-isomorphism by exactness. Thus its object classes obey $[E]=[E']+[E'']$. The bundle generators therefore define the canonical homomorphism $K^0_{\rm vb}(X)\to K_0(X)$, naturally in pullback. This proves its well-definedness without asserting surjectivity. The motivic coefficient complexes, products and local source are exactly those fixed in [F1]; write $D_i=\mathbb Z(i)_{\rm mot}$ and $H^{a,i}_{\rm mot}(X,\mathbb Z)=H^a(D_i(X))$. Write $Y_i(T)=\Omega^\infty H(D_i(T)[2i])$ for the original coefficient sheaf, with $\pi_0Y_i(T)=H^{2i,i}_{\rm mot}(T,\mathbb Z)$, and $P^{\rm sh}$ for ordinary sheafification of the perfect K-space presheaf. The ordinary operations map $P^{\rm sh}$ to $Y_i$. The local source $\mathcal K$ and target denoted $K(D_i,2i)$ are their further stalkwise replacements on [F1]'s smooth qcqs Nisnevich site. These replacements need not retain the original coefficient sections. At weight one, the separate actual Picard-stack comparison in [F2] supplies the 1-type argument below. In [F2], $BGL_n=\mathrm{Vect}_{n,X}$ is the stack of rank-$n$ bundles and isomorphisms, $G(n,N)$ classifies rank-$n$ quotients of $\mathcal O_X^N$, and stable $BGL$ uses addition of a trivial line. The determinant and Picard stack maps and their EM orientation are those of [F2]; the Picard group consists of line-bundle isomorphism classes under tensor product. Formal series, their finite convolution product and their recursive inverses are those of [F3]. Normal means that every local ring is an integrally closed domain; normality is used only to identify the stated included scope.

[F5] [[thm-author-d026a7b99ace-universal-chern-space]] supplies the specified actual universal operations on this same local perfect model, their restriction to the original projective-relation universal bundle classes, their vanishing on trivial-rank classes for positive indices, and their evaluation through the canonical perfect-space unit on every qcqs field-scheme. This is the normalization used for $C_1$ at step 1.1 and for every positive coefficient at step 4.1.

[F6] The actual weight-one stack comparison in [[lem-author-ec13f1db88a5-global-picard-projection]] identifies the original zeroth space of the first graded layer, hence the actual target $Y_1$ in [F5], with the Picard stack $B\mathbb G_m$. This is a comparison of stacks with their line isomorphisms, not only of Picard groups. [[thm-author-16f30f6b95cb-lowweight-determinant-one-type-input]] supplies connectedness of the ordinary sheaf rank-zero fiber $S^{\rm sh}$, its determinant fundamental-group isomorphism, the equivalence $\tau_{\leq1}S^{\rm sh}\simeq B\mathbb G_m$, the factorization of every map to this 1-type through that truncation, and full faithfulness of pointed connected 1-types through their fundamental-group sheaves. These facts apply before optional hypercompletion. They permit the recovery in step 2.1 specifically at weight one, without assuming such recovery for arbitrary higher coefficient targets.

## Proof
**Given:** $k,X$, the specified actual perfect operations and classes, Choice and the compatible site and universe bounds in the Statement.

**Goal:** Match the actual first operation globally in qcqs scope before using it in the Cartan cross term.

1.1 Compare $C_1$ with the extended determinant followed by the actual EM Picard orientation of [F2], as maps on the same local perfect K-space. On a finite Grassmannian over $X$, their restrictions to the universal quotient bundle agree: [F5] identifies the restriction of $C_1$ with the original projective-relation first class, and the actual-bundle comparison in [F2] identifies that class with the oriented determinant; that Grassmannian is qcqs over $k$. The determinant map here is the already supplied stack map with its automorphism and gluing data. Universal-class detection and fixed-weight stabilization in [F2], applied at weight one, identify the two stable $BGL$ maps, without an inverse-limit ambiguity. Write $D$ for this oriented determinant map. The degree-one coefficientwise Cartan homotopy in [F1], with $C_0=1$, gives $C_1\circ\mu\simeq+\circ(C_1\times C_1)$ on the local perfect model, where $\mu$ is K-space addition and $+$ is addition in $K(D_1,2)$; this is a homotopy of maps, before taking components. To apply it to the free-class arrow, let $\underline{\mathbb Z}$ denote the sheaf of locally constant integers, let $r:\underline{\mathbb Z}\to\mathcal K$ be the trivial integer-rank section, and let $b:BGL\to\mathcal K$ be the reduced stable bundle-class map. By [F1] the arrow is $j=\mu\circ(r\circ\operatorname{pr}_1,b\circ\operatorname{pr}_2)$. Here the $\operatorname{pr}_i$ are the two projections from $\underline{\mathbb Z}\times BGL$. Since $C_1r\simeq0$ by [F5], degree-one Cartan now gives $C_1j\simeq C_1b\circ\operatorname{pr}_2$. For the other map, the determinant's enhanced split-cofiber additivity in [F2] identifies the determinant of this sum with the tensor product of its two determinant lines, as stack maps. The determinant of the trivial-rank summand is canonically the unit line, for positive, zero and negative integer ranks. The tensor-unit isomorphism therefore gives $Dj\simeq Db\circ\operatorname{pr}_2$ after composing with the same EM orientation, including all gluing data. Combining these two translation identities with the stable $BGL$ comparison $C_1b\simeq Db$ proves $C_1j\simeq Dj$ on the entire free-class arrow. The qcqs detection in [F1] identifies the two maps after further stalkwise localization. This is at this point an equality of local-model maps only. [A1, F1, F2, F4, F5]

2.1 Recover equality for the original coefficient target using [F6]. Identify $Y_1$ with the original Picard 1-stack and restrict the two ordinary maps to the ordinary rank-zero fiber $S^{\rm sh}$. The local equality of step 1.1 gives equality of their homomorphisms on fundamental-group sheaves, since further stalkwise localization preserves these sheaves. Both ordinary maps factor through $\tau_{\leq1}S^{\rm sh}$ by [F6]. This truncation and the target are pointed connected 1-types; full faithfulness through their fundamental-group sheaves therefore identifies the original pointed maps on $S^{\rm sh}$. To pass to every rank, use the trivial-bundle rank section $s$ and rank reduction $\rho(z)=z-s(\mathrm{rk}(z))$. The ordinary degree-one Cartan homotopy in [F1] and the ordinary zero homotopy $C_1^{\rm ord}s\simeq0$ of [F5] give $C_1^{\rm ord}\simeq C_1^{\rm ord}\rho$, including negative integer ranks. For the oriented determinant, the actual split-cofiber tensor identity in [F2] and the canonical unit determinant of $s$ give the same rank-reduction identity, with line isomorphisms and descent retained. Thus the original ordinary maps agree on the whole perfect K-space sheaf. Compose with its ordinary source unit and evaluate at $X$; their components now lie in the original $\pi_0Y_1(X)=H^{2,1}_{\rm mot}(X,\mathbb Z)$. By the actual determinant factorization of [F2], this is exactly $c_1^{\rm perf}$. No injectivity from a hypercompleted coefficient value back to the original value is assumed. [A1, F1, F2, F4, F5, F6, step 1.1]

3.1 Compare coefficients of $t^2$ in the actual total Cartan identity of [F1], using step 2.1 for its first coefficient. This gives the stated formula for $c_2(x+y)$. The formal inverse identity of [F3] applies to the same total-series homomorphism and gives $c_2(-y)=c_1^{\rm perf}(y)^2-c_2(y)$. Multiplication for $x-y$ therefore gives $c_2(x-y)=c_2(x)-c_1^{\rm perf}(x)c_1^{\rm perf}(y)+c_1^{\rm perf}(y)^2-c_2(y)$. If the first classes agree, the two quadratic terms cancel. [A1, F1, F3, step 2.1]

4.1 On every actual bundle the specified universal operation is its original projective-relation class, as retained by [F5]. Precompose the total homomorphism on perfect $K_0$ with the well-defined canonical bundle-to-perfect homomorphism of [F4]. The resulting homomorphism and the virtual bundle homomorphism of [F3] agree on all bundle generators. They agree on the entire bundle presentation and its image. This proves every asserted restriction and arithmetic formula on the stated qcqs schemes, including normal ones, without assuming that image is all of perfect $K_0$. [A1, F1, F3, F4, F5, step 2.1, step 3.1] ∎

## Scope and reading limits
This maintenance read all eight assigned bodies and their current declared supplier interfaces. The first-class argument now distinguishes the ordinary coefficient target from its further local replacement and uses the supplied actual Picard 1-stack and connected-1-type classification to recover the ordinary identity. No new dependency or imported theorem is required for this recovery. The original Statement and dependency edges are unchanged; the qcqs scope, bundle restriction and coefficient formulas are retained. The argument makes no claim that higher coefficient targets are already 1-types.

No original PDF or external paper was freshly read for this repair; the substantial constructions are used through the declared supplier contracts. Earlier source-reading and repair receipts remain historical and supply no independent acceptance here. The three graph consumers of the unchanged Statement are thm-normal-surface-classification, thm-normal-threefold-classification and lem-author-3cde9692a7e9-second-subgroup; this proof-only clarification proposes no interface propagation. Serving metadata, article coverage and report pages are preserved.
