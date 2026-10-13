---
id: lem-t-cohomology-is-additive-shift-compatible-and-detects-amplitude
kind: lemma
title: "t-cohomology is functorial, additive, shift-compatible and detects amplitude"
status: published
origin: pipeline
pipeline_run: frontier-44-special-representation-examples-28
dependency_level: 2
deps: [def-truncation-functors-and-cohomology-of-a-t-structure, lem-truncation-triangles-are-essentially-unique-and-functorial, def-canonical-t-structure-on-a-derived-category, def-triangulated-category, def-category-with-translation, def-additive-category, def-biproduct, def-additive-functor, cor-any-adjoint-between-additive-categories-is-additive, prop-an-additive-functor-preserves-split-biproduct-diagrams]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-11
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  scraped: []
  references:
    - title: "A. A. Beilinson, J. Bernstein and P. Deligne, «Faisceaux pervers», Astérisque 100 (1982), Société Mathématique de France (complete numdam PDF)"
      url: "https://www.numdam.org/item/AST_1982__100__1_0.pdf"
      locator: "§1.3.1–1.3.9, printed pp. 28–33; §5.4.10–5.4.13, printed pp. 143–147"
---

## Statement

Let $(\mathcal T^{\le0},\mathcal T^{\ge0})$ be a t-structure on a triangulated category $\mathcal T$, with truncations and t-cohomology as in [[def-truncation-functors-and-cohomology-of-a-t-structure]] and [[lem-truncation-triangles-are-essentially-unique-and-functorial]], and let $\mathcal C=\mathcal T^{\le0}\cap\mathcal T^{\ge0}$ be the heart.

(i) Each $H^n_t$ is a functor from $\mathcal T$ to $\mathcal C$: for every morphism $f:X\to Y$ the induced map $H^n_t(f)$ is the unique map compatible with $f$ under the truncations, and values lie in the heart.

(ii) *Shifts.* $H^n_t(X[m])\cong H^{n+m}_t(X)$ for all $m,n\in\mathbb Z$, naturally in $X$.

(iii) *Additivity.* For a finite biproduct $X\oplus Y$ with injections $i_X,i_Y$ and projections $p_X,p_Y$, the maps $(H^n_t(i_X),H^n_t(i_Y)):H^n_t(X)\oplus H^n_t(Y)\to H^n_t(X\oplus Y)$ and $(H^n_t(p_X),H^n_t(p_Y)):H^n_t(X\oplus Y)\to H^n_t(X)\oplus H^n_t(Y)$ are mutually inverse isomorphisms; in particular $H^n_t(X\oplus Y)\cong H^n_t(X)\oplus H^n_t(Y)$ naturally.

(iv) *Amplitude detection.* If $X\in\mathcal T^{\le m}$ then $H^n_t(X)=0$ for every $n>m$, and if $X\in\mathcal T^{\ge m}$ then $H^n_t(X)=0$ for every $n<m$. If the t-structure is bounded ([[def-truncation-functors-and-cohomology-of-a-t-structure]]), the converses hold: $H^n_t(X)=0$ for all $n>m$ implies $X\in\mathcal T^{\le m}$, and $H^n_t(X)=0$ for all $n<m$ implies $X\in\mathcal T^{\ge m}$.

(v) *Concentration and its consequences.* If $X\in\mathcal T^{\le m}$ then $\tau_{\ge m}X\cong H^m_t(X)[-m]$, and if $X\in\mathcal T^{\ge m}$ then $\tau_{\le m}X\cong H^m_t(X)[-m]$; if $X$ lies in both aisles then the canonical map gives $X\cong H^m_t(X)[-m]$. If $X$ and $Y$ both lie in $\mathcal T^{\le m}\cap\mathcal T^{\ge m}$, then the canonical identifications $X\cong H^m_t(X)[-m]$ and $Y\cong H^m_t(Y)[-m]$ identify $\operatorname{Hom}(X,Y)$ with $\operatorname{Hom}(H^m_t(X),H^m_t(Y))$ via $f\mapsto H^m_t(f)$; in particular this applies when the t-structure is bounded and $X,Y$ have $H^n_t=0$ for every $n\ne m$.

## Facts & Assumptions

**Given:** A t-structure $(\mathcal T^{\le0},\mathcal T^{\ge0})$ on a triangulated category $\mathcal T$, with truncation triangles $\tau_{\le n}X\to X\to\tau_{\ge n+1}X\to\tau_{\le n}X[1]$, heart $\mathcal C=\mathcal T^{\le0}\cap\mathcal T^{\ge0}$ and $H^n_t(X)=(\tau_{\le n}\tau_{\ge n}X)[n]$.

[F1] Truncation-triangle package: for $T\in\mathcal T^{\le n}$ the map $\operatorname{Hom}(T,\tau_{\le n}X)\to\operatorname{Hom}(T,X)$, $u\mapsto(\tau_{\le n}X\to X)u$, is a bijection natural in $X$, and dually $\operatorname{Hom}(\tau_{\ge n}X,T)\to\operatorname{Hom}(X,T)$ is a bijection for $T\in\mathcal T^{\ge n}$; $\operatorname{Hom}(\mathcal T^{\le n},\mathcal T^{\ge n+1})=0$; $\mathcal T^{\le m}\subseteq\mathcal T^{\le n}$ and $\mathcal T^{\ge n}\subseteq\mathcal T^{\ge m}$ for $m\le n$; $X\in\mathcal T^{\le n}$ if and only if $\tau_{\le n}X\to X$ is an isomorphism, if and only if $\tau_{\ge n+1}X=0$, if and only if $\operatorname{Hom}(X,\mathcal T^{\ge n+1})=0$, and dually for $\mathcal T^{\ge n}$; the aisles are closed under extensions and finite direct sums; every decomposition triangle with outer terms in $\mathcal T^{\le n},\mathcal T^{\ge n+1}$ is canonically the truncation triangle ([[lem-truncation-triangles-are-essentially-unique-and-functorial]]).

[F2] The translation $[1]$ is an additive autoequivalence with chosen coherence isomorphisms $[m][n]\cong[m+n]$ ([[def-triangulated-category]], [[def-category-with-translation]] via [[def-truncation-functors-and-cohomology-of-a-t-structure]]).

[F3] The category $\mathcal T$ is additive, and $\mathcal T^{≤n}$ and $\mathcal T^{≥n}$ are additive subcategories: they contain the zero object and are closed under finite direct sums by [F1]. A right or left adjoint between additive categories is additive ([[cor-any-adjoint-between-additive-categories-is-additive]], [[def-additive-functor]]), and an additive functor preserves split biproduct diagrams, carrying the structure maps of a biproduct to mutually inverse structure maps of the image ([[prop-an-additive-functor-preserves-split-biproduct-diagrams]], [[def-biproduct]], [[def-additive-category]]).

## Proof

**Proof technique:** direct.

1.1 Claim (i). The formula $H^n_t(X)=(\tau_{\le n}\tau_{\ge n}X)[n]$ is a composite of functors by [F1] and [F2], and the induced maps are uniquely compatible with the truncation maps by [F1]. Put $Y=\tau_{\ge n}X$ and $Z=\tau_{\le n}Y$. For $T\in\mathcal T^{\le n-1}$, adjunction gives $\operatorname{Hom}(T,Z)\cong\operatorname{Hom}(T,Y)=0$, since $Y\in\mathcal T^{\ge n}$. The aisle criterion therefore puts $Z$ in $\mathcal T^{\ge n}$; it is in $\mathcal T^{\le n}$ by construction. Consequently $Z[n]=H^n_t(X)$ lies in the heart by the shift conventions. [F1, F2, algebra]

1.2 Claim (ii). For all $a,b$ there is a canonical isomorphism $\tau_{\le a}(X[b])\cong(\tau_{\le a+b}X)[b]$ over $X[b]$, and dually for $\tau_{\ge a}$: for $T\in\mathcal T^{\le a}$ both objects represent the same functor, $\operatorname{Hom}(T,\tau_{\le a}(X[b]))\cong\operatorname{Hom}(T,X[b])$ by the adjunction [F1], and $\operatorname{Hom}(T,(\tau_{\le a+b}X)[b])\cong\operatorname{Hom}(T[-b],\tau_{\le a+b}X)\cong\operatorname{Hom}(T[-b],X)\cong\operatorname{Hom}(T,X[b])$ because $T[-b]\in\mathcal T^{\le a+b}$, so the essential uniqueness in [F1] identifies them. Hence $H^n_t(X[m])=(\tau_{\le n}\tau_{\ge n}(X[m]))[n]\cong(\tau_{\le n}((\tau_{\ge n+m}X)[m]))[n]\cong((\tau_{\le n+m}\tau_{\ge n+m}X)[m])[n]\cong H^{n+m}_t(X)$, using the coherence isomorphisms of [F2], and the isomorphisms are natural in $X$ by functoriality of the truncations. [F1, F2, algebra]

1.3 Claim (iv), the forward implications. If $X\in\mathcal T^{\le m}$ and $n>m$, then $X\in\mathcal T^{\le n-1}$ by [F1], so $\tau_{\ge n}X=0$ by the aisle criterion [F1] and $H^n_t(X)=0$. If $X\in\mathcal T^{\ge m}$ and $n<m$, then $X\in\mathcal T^{\ge n+1}$ by [F1], so $\tau_{\ge n}X\cong X$ and $\tau_{\le n}\tau_{\ge n}X=\tau_{\le n}X=0$ by the dual aisle criterion, whence $H^n_t(X)=0$. [F1, algebra]

1.4 Claim (v), concentration. The identity $H^m_t(X)[-m]=\tau_{\le m}\tau_{\ge m}X$ is the definition. If $X\in\mathcal T^{\ge m}$ then $\tau_{\ge m}X\cong X$ by [F1], giving the second identity. If $X\in\mathcal T^{\le m}$, then $\tau_{\ge m}X\in\mathcal T^{\le m}$: for $W\in\mathcal T^{\ge m+1}$ one has $\operatorname{Hom}(\tau_{\ge m}X,W)\cong\operatorname{Hom}(X,W)=0$ by the adjunction and orthogonality of [F1], so the aisle criterion gives $\tau_{\ge m}X\in\mathcal T^{\le m}$; hence $\tau_{\le m}\tau_{\ge m}X\cong\tau_{\ge m}X$, giving the first identity. If $X$ lies in both aisles, then $\tau_{\le m}X\cong X$ and $\tau_{\ge m}X\cong X$, and the composite canonical map $X\cong H^m_t(X)[-m]$ is the truncation map. [F1, algebra]

2.1 Claim (iii). The inclusion $\mathcal T^{\le n}\hookrightarrow\mathcal T$ has the right adjoint $\tau_{\le n}$ by [F1], and the inclusion $\mathcal T^{\ge n}\hookrightarrow\mathcal T$ has the left adjoint $\tau_{\ge n}$; these inclusions and $\mathcal T$ are additive by [F3], so $\tau_{\le n}$ and $\tau_{\ge n}$ are additive functors by [F3], and so is the autoequivalence $[n]$ by [F2]. Hence $H^n_t$ is additive, and by [F3] it preserves the split biproduct diagram of $X\oplus Y$: the images of the injections and projections under $H^n_t$ are the two mutually inverse structure maps of a biproduct diagram of $H^n_t(X)$ and $H^n_t(Y)$, which is precisely the assertion, and the resulting isomorphism $H^n_t(X\oplus Y)\cong H^n_t(X)\oplus H^n_t(Y)$ is natural by functoriality. [step 1.1, F1, F2, F3]

2.2 Claim (iv), the converses for a bounded t-structure. Suppose $H^n_t(X)=0$ for all $n>m$. By boundedness choose $N\ge m$ with $X\in\mathcal T^{\le N}\cap\mathcal T^{\ge-N}$; then $X\in\mathcal T^{\le N}$, and if $X\in\mathcal T^{\le k}$ for some $k\ge m+1$, the concentration identity of step 1.4 gives $\tau_{\ge k}X\cong H^k_t(X)[-k]=0$, so $X\cong\tau_{\le k-1}X\in\mathcal T^{\le k-1}$ by the aisle criterion. Descending finitely from $N$ to $m+1$ gives $X\in\mathcal T^{\le m}$. The lower bound is dual: if $H^n_t(X)=0$ for all $n<m$, choose $N\ge -m$ with $X\in\mathcal T^{\le N}\cap\mathcal T^{\ge-N}$ and ascend from $-N$ to $m-1$, using $\tau_{\le k}X\cong H^k_t(X)[-k]=0$ to conclude $X\to\tau_{\ge k+1}X$ is an isomorphism and $X\in\mathcal T^{\ge k+1}$; the two arguments are independent. [step 1.3, step 1.4, F1, algebra]

2.3 Claim (v), map detection. Let $X,Y\in\mathcal T^{\le m}\cap\mathcal T^{\ge m}$. By step 1.4 the canonical maps give isomorphisms $X\cong H^m_t(X)[-m]$ and $Y\cong H^m_t(Y)[-m]$; under these, a morphism $f:X\to Y$ corresponds to $H^m_t(f)$: both the source and target identifications are the truncation maps, and $H^m_t$ is a functor commuting with the truncations by step 1.1, so the induced bijection is $f\mapsto H^m_t(f)$, and it is a bijection because the identifications are isomorphisms. [step 1.1, step 1.4]

3.1 Claim (v), the bounded single-degree case: if the t-structure is bounded and $X,Y$ have $H^n_t=0$ for every $n\ne m$, then step 2.2 (applied to the positive and negative ranges) gives $X,Y\in\mathcal T^{\le m}\cap\mathcal T^{\ge m}$, so step 2.3 applies and $\operatorname{Hom}(X,Y)\to\operatorname{Hom}(H^m_t(X),H^m_t(Y))$, $f\mapsto H^m_t(f)$, is a bijection under the canonical identifications. [step 2.2, step 2.3]

4.1 Steps 1.1 to 1.4 and 2.2 to 3.1 prove all the clauses: (i) in step 1.1, (ii) in step 1.2, (iii) in step 2.1, both directions of (iv) in steps 1.3 and 2.2, and the concentration identities and map detection of (v) in steps 1.4, 2.3 and 3.1. [step 1.1, step 1.2, step 2.1, step 1.3, step 1.4, step 2.2, step 2.3, step 3.1] ∎
