---
id: lem-finite-haar-volume-compactness-criterion
kind: lemma
title: Compactness, finite Haar volume and invariant vectors in the regular representation
status: published
origin: pipeline
dependency_level: 0
deps:
  - def-left-haar-integral-and-left-haar-measure
  - lem-haar-measure-is-positive-on-nonempty-open-sets-and-finite-on-compact-sets
  - def-left-and-right-regular-unitary-representations
  - thm-regular-representations-are-unitary-and-strongly-continuous
  - def-complex-haar-lp-spaces-and-compactly-supported-functions
  - lem-complex-haar-l1-and-l2-are-complete-and-cc-dense
  - def-locally-compact-space
  - def-hausdorff-space
  - def-compact-space
  - def-topological-group
  - def-product-topology
  - def-subspace-topology-top
  - thm-product-universal-property
  - thm-finite-products-of-compact-spaces
  - thm-compactness-under-continuous-maps
  - thm-compact-subset-of-a-hausdorff-space-is-closed
  - cor-additivity-of-the-nonnegative-lebesgue-integral
  - thm-nonnegative-integral-zero-iff-zero-almost-everywhere
  - thm-recursion
  - thm-of-archimedean
  - def-axiom-of-choice
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
axiom_audit: "Assume full AC. The regular-representation and L2-density suppliers use AC (including their DC/CC prerequisites); the proof uses AC to choose a successor for each finite history of disjoint translates. No weaker choice principle is asserted to suffice."
verification:
  audited: "2026-10-08"
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-08
sources:
  references:
    - title: "Bachir Bekka, Pierre de la Harpe and Alain Valette, Kazhdan's Property (T) (Cambridge University Press 2008; author-hosted complete text)"
      url: "https://perso.univ-rennes1.fr/bachir.bekka/KazhdanTotal.pdf"
      locator: "Appendix A, §A.5, Proposition A.5.1, printed pp. 323–324; Chapter 1, Remark 1.1.2(vii), printed p. 33"
---

## Statement

Assume the Axiom of Choice. Let $G$ be a locally compact Hausdorff topological group ([[def-topological-group]], [[def-locally-compact-space]], [[def-hausdorff-space]]) with a left Haar measure $\mu$ ([[def-left-haar-integral-and-left-haar-measure]]) and the left regular representation $\lambda_G$ on $L^2(G)$ ([[def-left-and-right-regular-unitary-representations]], [[thm-regular-representations-are-unitary-and-strongly-continuous]], [[def-complex-haar-lp-spaces-and-compactly-supported-functions]]). Then the following are equivalent:

1. $G$ is compact.
2. $\mu(G)<\infty$.
3. $\lambda_G$ has a nonzero invariant vector.
4. The constant function $1$ belongs to $L^2(G)$.

Moreover, $\mu(G)>0$ always. Thus, when $G$ is compact, $\mu/\mu(G)$ is a left Haar probability measure.

## Facts & Assumptions

**Given:** AC; a locally compact Hausdorff group $G$; a fixed left Haar measure $\mu$; and $\lambda_G(g)f(x)=f(g^{-1}x)$ on $L^2(G)$.

[F1] Haar measure is positive on nonempty open sets and finite on compact sets ([[lem-haar-measure-is-positive-on-nonempty-open-sets-and-finite-on-compact-sets]]).

[F2] Left invariance gives $\int_{gE}\psi\,d\mu=\int_E\psi(gx)\,d\mu(x)$ for Borel $E$ and nonnegative measurable $\psi$; this follows first for indicator functions from $\mu(gE)=\mu(E)$, then for simple functions and increasing limits ([[def-left-haar-integral-and-left-haar-measure]]).

[F3] $L^2(G)$ consists of almost-everywhere classes with $\|f\|_2^2=\int_G|f|^2\,d\mu$, and $C_c(G)$ consists of continuous functions with compact support ([[def-complex-haar-lp-spaces-and-compactly-supported-functions]]).

[F4] Under AC, $C_c(G)$ is dense in $L^2(G)$ ([[lem-complex-haar-l1-and-l2-are-complete-and-cc-dense]]).

[F5] A finite product of compact spaces is compact ([[thm-finite-products-of-compact-spaces]]); inclusions into a product and restrictions to subspaces are continuous ([[thm-product-universal-property]], [[def-subspace-topology-top]]); continuous images of compact spaces are compact ([[thm-compactness-under-continuous-maps]]).

[F6] Compact subsets of the Hausdorff space $G$ are closed, hence Borel ([[thm-compact-subset-of-a-hausdorff-space-is-closed]]).

[F7] A nonnegative measurable function with integral zero on a measurable set vanishes almost everywhere there; integrals over finite disjoint unions add ([[thm-nonnegative-integral-zero-iff-zero-almost-everywhere]], [[cor-additivity-of-the-nonnegative-lebesgue-integral]]).

[F8] The canonical naturals are unbounded in $\mathbb R$ ([[thm-of-archimedean]]).

[F9] Inversion and left translation are continuous, so their restrictions map compact sets to compact sets ([[def-topological-group]], [[thm-compactness-under-continuous-maps]]).

[F10] A finite union of compact subsets is compact by the open-cover definition ([[def-compact-space]]).

[F11] A total map from a set to itself and a starting point determine a recursively defined sequence ([[thm-recursion]]).

## Proof

**Proof technique:** direct.

**Given:** AC, $G$, $\mu$, and $\lambda_G$ as above.

1.1 The group $G$ is nonempty and open in itself, so [F1] gives $\mu(G)>0$. If $G$ is compact, [F1] also gives $\mu(G)<\infty$. [F1]

1.2 Suppose $0\ne f\in L^2(G)$ is invariant and put $a=\|f\|_2>0$. By [F4] choose $h\in C_c(G)$ with $\|f-h\|_2<a/2$. Then $\|h\|_2>a/2$, so $h\ne0$; let $K=\operatorname{supp}h$, a nonempty compact Borel set by [F6]. If $\int_K|f|^2\,d\mu=0$, then [F7] gives $f=0$ almost everywhere on $K$ and $h=0$ off $K$, whence $\|f-h\|_2^2=\|h\|_2^2+\int_{G\setminus K}|f|^2\,d\mu\ge\|h\|_2^2$, contradicting $\|f-h\|_2<a/2<\|h\|_2$. Therefore $c:=\int_K|f|^2\,d\mu>0$. [F3, F4, F6, F7, choose, algebra]

1.3 The set $D:=KK^{-1}$ is compact: inversion maps $K$ continuously to a compact set by [F9], the finite product $K\times K^{-1}$ is compact by [F5], and the inclusion into $G\times G$ followed by multiplication maps it continuously onto $D$. It is closed and Borel by [F6]. [F5, F6, F9]

1.4 Suppose $G$ is noncompact. Let $\mathcal H=\bigcup_{n\in\mathbb N}G^n$ be the set of finite histories. For every $h=(g_1,\ldots,g_n)\in\mathcal H$, the set $C_h:=G\setminus\bigcup_{i=1}^n g_iD$ is nonempty, since the removed finite union of compact translates is compact by [F9, F10] and cannot equal $G$; set $C_\varnothing=G$. AC chooses a selector $s(h)\in C_h$ for all histories. Define $T(h)$ by appending $s(h)$ to $h$; [F11] recursively produces histories $h_{n+1}=T(h_n)$ from $h_0=\varnothing$, hence a sequence $g_1,g_2,\ldots$ of appended entries. The translates $g_nK$ are pairwise disjoint: an intersection $g_jK\cap g_iK\ne\varnothing$ would imply $g_j\in g_iKK^{-1}=g_iD$, contrary to the choice of $g_j$. [given, F5, F6, F9, F10, F11, choose, construct]

2.1 The constant function has $\|1\|_2^2=\int_G1\,d\mu=\mu(G)$, so $\mu(G)<\infty$ exactly when $1\in L^2(G)$. By step 1.1 this class is nonzero; it is fixed by every $\lambda_G(g)$. Thus (ii) is equivalent to (iv), and (iv) implies (iii). [F1, F3]

2.2 For each $n$, invariance of $f$ means $f(g_nx)=f(x)$ almost everywhere, since $\lambda_G(g_n^{-1})f=f$; [F2] therefore gives $\int_{g_nK}|f|^2\,d\mu=\int_K|f(g_nx)|^2\,d\mu(x)=c$. The sets $g_nK$ are disjoint Borel sets by step 1.4 and [F6], so [F7] gives $a^2=\int_G|f|^2\,d\mu\ge\sum_{n=1}^N\int_{g_nK}|f|^2\,d\mu=Nc$ for every $N$. Since $c>0$, [F8] supplies $N$ with $Nc>a^2$, a contradiction. Thus (iii) implies (i). [F2, F6, F7, F8, step 1.2, step 1.4, algebra]

3.1 Step 1.1 gives (i)$\Rightarrow$(ii), step 2.1 gives (ii)$\Leftrightarrow$(iv)$\Rightarrow$(iii), and step 2.2 gives (iii)$\Rightarrow$(i); hence all four conditions are equivalent. When they hold, $0<\mu(G)<\infty$ by step 1.1, so scaling $\mu$ by $1/\mu(G)$ gives a left Haar probability measure. [step 1.1, step 2.1, step 2.2] ∎
