---
id: lem-circle-maximal-weak-one-one
kind: lemma
title: "The circle maximal function is weak type one one for finite measures"
status: draft
origin: pipeline
pipeline_run: frontier-37-owner-30
deps: [lem-compactness-is-intrinsic, def-countable-choice, def-circle-maximal-function-and-nontangential-region, def-l-one-of-a-measure, def-total-variation-of-a-signed-or-complex-measure, def-the-one-dimensional-torus-and-normalized-haar-integral, thm-complex-l-one-densities-define-complex-measures-with-prescribed-total-variation, thm-fatou-lemma, thm-total-variation-is-a-measure, cor-second-countable-lch-locally-finite-borel-measures-are-regular, thm-complex-holder-minkowski-and-the-quotient-norm]
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
verification:
  precheck: pass
sources:
  references:
    - title: "Axler, Bourdon and Ramey, Harmonic Function Theory, second edition, Chapter 6"
      url: "https://www.axler.net/HFT.pdf"
      locator: "The Fatou Theorem, printed pp. 130-135 (PDF pp. 135-140): the covering lemma 6.33, the size comparison 6.35 for dilated caps, and the weak-type estimate 6.37."
    - title: "Herbert Koch, Notes for Harmonic and Real Analysis (University of Bonn, 2014-15), Chapter 3"
      url: "https://www.math.uni-bonn.de/ag/ana/WiSe1415/V4B5_notes.pdf"
      locator: "§§1.2.1-3, printed pp. 35-37: the weak-type maximal estimate underlying the boundary convergence results."
---

## Statement

Assume [[def-countable-choice|countable choice]]. For every finite regular
complex Borel measure $\mu$ on $\mathbb T$ and every real $\lambda>0$, the
superlevel set $\{M_{\mathbb T}\mu>\lambda\}$ is Borel measurable and
$$m\bigl(\{M_{\mathbb T}\mu>\lambda\}\bigr)\le\frac{3\,|\mu|(\mathbb T)}{\lambda}.$$
In particular, for $f\in L^1(\mathbb T,m)$ one has
$m(\{M_{\mathbb T}f>\lambda\})\le 3\|f\|_1/\lambda$ with
$\|f\|_1=\int_{\mathbb T}|f|\,dm$.

## Facts & Assumptions

**Given:** Countable choice, a finite regular complex Borel measure $\mu$ on $\mathbb T$, and a real number $\lambda>0$.

[L1] For $\zeta\in\mathbb T$ and $0<h\le\tfrac12$ the set $I_h(\zeta)$ is the centered open arc of radius $h$ (the whole circle when $h=\tfrac12$) and $m(I_h(\zeta))=2h$; moreover $M_{\mathbb T}\mu(\zeta)=\sup_{0<h\le1/2}\frac{|\mu|(I_h(\zeta))}{m(I_h(\zeta))},\qquad M_{\mathbb T}f(\zeta)=\sup_{0<h\le1/2}\frac{1}{m(I_h(\zeta))}\int_{I_h(\zeta)}|f|\,dm$ ([[def-circle-maximal-function-and-nontangential-region]]).

[L2] For a complex measure the total variation $|\mu|$ is a measure, so monotonicity gives $|\mu|(E)\le|\mu|(\mathbb T)<+\infty$ for every Borel $E$ ([[def-total-variation-of-a-signed-or-complex-measure]], [[thm-total-variation-is-a-measure]]).

[L3] Fatou's lemma: for nonnegative measurable functions on a measure space, $\int\liminf_n f_n\,d\nu\le\liminf_n\int f_n\,d\nu$ ([[thm-fatou-lemma]]).

[L4] The normalized Haar measure $m$ is a probability measure on the compact second-countable Hausdorff space $\mathbb T$, and every Borel set $E$ satisfies $m(E)=\sup\{m(K):K\subseteq E\text{ compact}\}$ ([[def-the-one-dimensional-torus-and-normalized-haar-integral]], [[cor-second-countable-lch-locally-finite-borel-measures-are-regular]]).

[L5] For $f\in L^1(\mathbb T,m)$ the density measure $fm$ is a complex measure with $|fm|(E)=\int_E|f|\,dm$ and $\|f\|_1=\int_{\mathbb T}|f|\,dm$, and $M_{\mathbb T}(fm)=M_{\mathbb T}f$ ([[thm-complex-l-one-densities-define-complex-measures-with-prescribed-total-variation]], [[def-circle-maximal-function-and-nontangential-region]], [[thm-complex-holder-minkowski-and-the-quotient-norm]]).

[L6] A compact metric subspace admits a finite subcover from every family of ambient open sets covering it ([[lem-compactness-is-intrinsic]]).

## Proof

**Proof technique:** direct.

1.1 First let $0<h<\tfrac12$. If $\zeta_n\to\zeta$ in $\mathbb T$, then for every $\eta\in I_h(\zeta)$ the triangle inequality for the circular distance gives $d(\zeta_n,\eta)\le d(\zeta_n,\zeta)+d(\zeta,\eta)<h$ for all large $n$, so the indicators satisfy $\mathbf 1_{I_h(\zeta)}\le\liminf_n\mathbf 1_{I_h(\zeta_n)}$ pointwise; applying [L3] to the finite measure $|\mu|$ of [L2] gives $|\mu|(I_h(\zeta))\le\liminf_n|\mu|(I_h(\zeta_n))$, that is, the map $\zeta\mapsto|\mu|(I_h(\zeta))$ is lower semicontinuous. For $h=\tfrac12$, [L1] gives $I_h(\zeta)=\mathbb T$ for every centre, so the mass function is constant and hence lower semicontinuous. Since [L1] makes $m(I_h(\zeta))=2h$ independent of $\zeta$ for every $0<h\le\tfrac12$, the set $A_h:=\{\zeta\in\mathbb T:|\mu|(I_h(\zeta))>\lambda\,m(I_h(\zeta))\}$ is the superlevel set of a lower semicontinuous function and is therefore open. [given, L1, L2, L3, algebra]

2.1 Because $M_{\mathbb T}\mu$ is the supremum of the quotients over $0<h\le\tfrac12$, the identity $\{M_{\mathbb T}\mu>\lambda\}=\bigcup_{0<h\le1/2}A_h$ holds; it is a union of open sets, so $\{M_{\mathbb T}\mu>\lambda\}$ is open and in particular Borel measurable. [step 1.1, L1]

3.1 Let $K\subseteq\{M_{\mathbb T}\mu>\lambda\}$ be compact. If $K=\varnothing$, then $m(K)=0\le3|\mu|(\mathbb T)/\lambda$; assume henceforth that $K\ne\varnothing$. The family of all open arcs $I_h(\zeta)$ with $h\in(0,\tfrac12]$ and $|\mu|(I_h(\zeta))>\lambda\,m(I_h(\zeta))$ is a family of open subsets of $\mathbb T$, described by a formula and hence requiring no selection, that covers $K$ by step 2.1; [L6] provides a finite subcover $I_1,\dots,I_N$ of $K$ by such arcs, each satisfying $|\mu|(I_j)>\lambda\,m(I_j)$. [step 2.1, L6, given, construct]

4.1 Relabel the finite list so that the radii satisfy $h_1\ge h_2\ge\cdots\ge h_N$, and pass through it once, keeping an arc exactly when it is disjoint from every previously kept arc. The kept arcs are pairwise disjoint and each still satisfies $|\mu|(I_i)>\lambda\,m(I_i)$. If $h_1=\tfrac12$, the first kept arc is $\mathbb T$ and contains every arc of the subcover; set $\widehat I_1=\mathbb T$, whose measure is at most $3m(I_1)$. Otherwise all radii are strictly less than $\tfrac12$. If $I_j$ with center $c_j$ is rejected, it meets a kept arc $I_i$ with center $c_i$ and $i<j$, so $h_i\ge h_j$ and $d(c_i,c_j)\le h_i+h_j\le 2h_i$; every $\eta\in I_j$ therefore satisfies $d(\eta,c_i)\le d(\eta,c_j)+d(c_j,c_i)<h_j+2h_i\le 3h_i$. Writing $\widehat I_i:=\{\eta:d(\eta,c_i)<3h_i\}$, every arc of the subcover lies in $\widehat I_i$ for some kept arc $I_i$, and $m(\widehat I_i)\le 3m(I_i)$: if $3h_i<\tfrac12$ this reads $6h_i=3\cdot 2h_i$, while if $3h_i\ge\tfrac12$ then $m(\widehat I_i)=1\le 6h_i=3m(I_i)$; at equality the antipode is excluded but has measure zero. [step 3.1, L1, algebra]

5.1 The kept arcs are pairwise disjoint, so their $m$-measures add and their $|\mu|$-values add; by step 4.1 and [L2], $$\lambda\,m\Bigl(\bigcup_i I_i\Bigr)=\lambda\sum_i m(I_i)<\sum_i|\mu|(I_i)=|\mu|\Bigl(\bigcup_i I_i\Bigr)\le|\mu|(\mathbb T).$$ [step 4.1, L2, algebra]

6.1 The arcs $I_1,\dots,I_N$ cover $K$ and each lies in some $\widehat I_i$ of a kept arc, so step 4.1 and step 5.1 give $$m(K)\le m\Bigl(\bigcup_i\widehat I_i\Bigr)\le\sum_i m(\widehat I_i)\le 3\sum_i m(I_i)<\frac{3|\mu|(\mathbb T)}{\lambda}.$$ [step 4.1, step 5.1, algebra]

7.1 By [L4] the measure of the Borel set $\{M_{\mathbb T}\mu>\lambda\}$ is the supremum of $m(K)$ over compact $K\subseteq\{M_{\mathbb T}\mu>\lambda\}$; step 2.1 supplies the measurability and step 6.1 bounds every such $m(K)$ by $3|\mu|(\mathbb T)/\lambda$, so $m(\{M_{\mathbb T}\mu>\lambda\})\le 3|\mu|(\mathbb T)/\lambda$. [step 2.1, step 6.1, L2, L4]

8.1 Let $f\in L^1(\mathbb T,m)$ and apply step 7.1 to the finite complex measure $fm$: [L5] gives $|fm|(\mathbb T)=\int_{\mathbb T}|f|\,dm=\|f\|_1$ and $M_{\mathbb T}(fm)=M_{\mathbb T}f$, so $m(\{M_{\mathbb T}f>\lambda\})\le 3\|f\|_1/\lambda$. [step 7.1, L5] ∎
