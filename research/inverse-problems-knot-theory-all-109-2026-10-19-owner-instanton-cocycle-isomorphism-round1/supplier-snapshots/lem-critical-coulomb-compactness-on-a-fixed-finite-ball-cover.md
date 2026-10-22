---
id: lem-critical-coulomb-compactness-on-a-fixed-finite-ball-cover
kind: lemma
title: "Critical Coulomb compactness on a fixed finite ball cover"
status: draft
origin: session
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps:
  - def-axiom-of-choice
  - thm-choice-implies-dependent-implies-countable-choice
  - lem-small-critical-curvature-coulomb-gauges-on-four-balls
  - lem-critical-four-dimensional-coulomb-estimate-and-extraction
  - lem-critical-coulomb-transition-maps-have-holder-representatives
  - lem-small-critical-drift-poisson-gradient-inverse
  - thm-global-w-two-p-estimate-for-the-laplacian-on-rn
  - thm-rellich-compactness-from-w-one-p-to-lp-on-an-extension-domain
  - thm-extension-theorem-for-bounded-smooth-domains
  - thm-complex-lp-completeness-and-almost-everywhere-subsequences
  - thm-holder-inequality-for-integrals
  - thm-higher-order-sobolev-embedding
  - thm-meyers-serrin-density-on-an-arbitrary-open-set
  - lem-smooth-bump-between-concentric-euclidean-balls
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Swarnendu Sil, Topology of weak G-bundles via Coulomb gauges in critical dimensions, Theorem 32 and full proof, pp.24–27"
      url: "https://arxiv.org/pdf/1909.07308"
---

## Statement

Assume full AC. There is a constant $\epsilon>0$ with the following property. Fix finitely many open Euclidean balls $U_i\subset\mathbb R^4$, $1\le i\le N$. For every positive integer $n$, let $A_i^n$ be a smooth $\mathfrak{su}(2)$ connection form near $\overline U_i$. Suppose given smooth $SU(2)$ transition maps $t_{ij}^n$ on $U_i\cap U_j$ satisfying
$$A_j^n=(A_i^n)^{t_{ij}^n},\quad t_{ii}^n=I,\quad t_{ji}^n=(t_{ij}^n)^{-1},\quad t_{ij}^nt_{jk}^n=t_{ik}^n,$$
and suppose $\|F_{A_i^n}\|_{L^2(U_i)}\le\epsilon$ for every $i,n$. Curvature and coefficient norms are the Euclidean Frobenius norms.

There exist gauges $g_i^n\in W^{2,p}(U_i;SU(2))$ for every finite $p\ge2$ and a single subsequence, denoted again by $n$, such that the forms $a_i^n=(A_i^n)^{g_i^n}$ are Coulomb with the weak zero-normal condition, and
$$a_i^n\rightharpoonup a_i\text{ in }W^{1,2}(U_i),\qquad a_i^n\to a_i\text{ in every }L^p(U_i),\ 1\le p<4,\qquad F_{a_i^n}\rightharpoonup F_{a_i}\text{ in }L^2(U_i).$$
The limits $a_i\in W^{1,2}$ satisfy $\int_{U_i}\langle a_i,d\phi\rangle=0$ for every smooth $\phi$ near $\overline U_i$. On every nonempty overlap, the transformed maps
$$h_{ij}^n=(g_i^n)^{-1}t_{ij}^ng_j^n$$
converge strongly in $W^{2,12/5}_{\mathrm{loc}}$ and uniformly on compact subsets to continuous $SU(2)$ maps $h_{ij}$. They satisfy $h_{ij}\in W^{2,q}_{\mathrm{loc}}$ for every $2<q<4$, and
$$dh_{ij}=h_{ij}a_j-a_i h_{ij},\qquad h_{ii}=I,\quad h_{ji}=h_{ij}^{-1},\quad h_{ij}h_{jk}=h_{ik},$$
with the transition equation holding weakly and the cocycle identities holding pointwise. Thus the limit is actual compatible local connection data on a continuous transition cocycle on this same cover. If the initial curvatures are Euclidean anti-self-dual, then $F_{a_i}^+=0$ distributionally.

The cover and its smooth local trivializations are hypotheses. No assertion of eventual bundle isomorphism, identification with a fixed original bundle, removal of singularities, or convergence modulo one global gauge is included.

## Statement references

[[lem-small-critical-curvature-coulomb-gauges-on-four-balls|Constructed small-curvature gauges]]

[[lem-critical-coulomb-transition-maps-have-holder-representatives|Transition regularity]]

[Sil, Theorem 32](https://arxiv.org/pdf/1909.07308)

## Facts & Assumptions

[F1] The constructed ball gauge theorem gives Coulomb forms in the strong smooth-normal approximation class, with $\|a_i^n\|_4\le C\epsilon$ and uniformly bounded $W^{1,2}$ norms on each fixed ball, from the specified curvature bound alone. It gives the gauges and continuous transformed transition maps with the exact cocycle and transition identities ([[lem-small-critical-curvature-coulomb-gauges-on-four-balls]]).

[F2] The complete Hilbert/Rellich extraction and nonlinear curvature passage in [[lem-critical-four-dimensional-coulomb-estimate-and-extraction]], proof steps 4.1–6.1, use only bounded $W^{1,2}$ and $L^4$ norms. They construct the Hilbert space, extract a weak $W^{1,2}$ and strong $L^2$ subsequence, obtain every strong $L^p$ convergence for $p<4$, and identify the weak $L^2$ curvature limit. These arguments will be used for the present Sobolev forms, without applying that lemma's smooth-input Statement outside its scope.

[F3] A Coulomb transition $dh=hb-ah$ with $a,b\in L^4$ and $h\in W^{1,2}_{\mathrm{loc}}(SU(2))$ is locally $W^{2,q}$ for every $2<q<4$. Its full proof also gives $-\Delta h=B\nabla h$, where $B(v)=\sum_k(a_kv_k-v_kb_k)$ and $|B|_{\mathrm{op}}\le|a|+|b|$ ([[lem-critical-coulomb-transition-maps-have-holder-representatives]]).

[F4] For $s=12/5$ the constructed critical-drift inverse has a threshold $\delta(8,s)>0$. A compactly supported weak solution $v$ with $\nabla v\in L^4$ of $-\Delta v=f+B\nabla v$, $\|B\|_4\le\delta$, $f\in L^2_c\cap L^s_c$, obeys $\|\nabla v\|_6\le2K_s\|f\|_s$ and belongs to $W^{2,s}_{\mathrm{loc}}$. Whole-space Laplace estimates apply once this compactly supported solution belongs to $W^{2,s}$ ([[lem-small-critical-drift-poisson-gradient-inverse]], [[thm-global-w-two-p-estimate-for-the-laplacian-on-rn]]).

[F5] Rellich applies on smaller balls to bounded $W^{1,2}$ sequences. An $L^2$-convergent sequence has an almost-everywhere convergent subsequence. Holder gives all product and finite-volume exponent comparisons below ([[thm-rellich-compactness-from-w-one-p-to-lp-on-an-extension-domain]], [[thm-extension-theorem-for-bounded-smooth-domains]], [[thm-complex-lp-completeness-and-almost-everywhere-subsequences]], [[thm-holder-inequality-for-integrals]]).

[F6] Smooth Sobolev approximation justifies weak products and cutoff differentiation; smooth cutoffs between concentric balls exist. On balls, $W^{2,3}$ in four dimensions gives first derivatives in $L^{12}$, and $W^{2,12/5}$ embeds continuously into $C^{0,\alpha}$ for $0<\alpha<1/3$ ([[thm-meyers-serrin-density-on-an-arbitrary-open-set]], [[lem-smooth-bump-between-concentric-euclidean-balls]], [[thm-higher-order-sobolev-embedding]], [[thm-extension-theorem-for-bounded-smooth-domains]]).

[F7] Full AC supplies the countable and dependent choices in these analytic suppliers and the diagonal construction ([[def-axiom-of-choice]], [[thm-choice-implies-dependent-implies-countable-choice]]).

## Proof

**Given:** The finite fixed cover and smooth connection and transition data of the statement. Put $s=12/5$.

1.1 **Constructed gauges and the fixed smallness threshold.** Choose $\epsilon$ below the small-curvature threshold in [F1] and so that $2C\epsilon\le\delta(8,s)$ in [F4]. Apply [F1] to every $A_i^n$, translating the center of each ball to zero. This constructs $g_i^n,a_i^n,h_{ij}^n$ and their exact transition and cocycle identities. On each fixed ball the $W^{1,2}$ norms of $a_i^n$ are uniformly bounded, and $\|a_i^n\|_4\le C\epsilon$. No derivative bounds on the original $t_{ij}^n$ or uniform higher norms of the original $A_i^n$ are used. [F1, F4, F7, given, choose, construct]

2.1 **Extraction of the local forms.** For each of the finitely many $i$, apply the Hilbert construction and weak extraction in [F2] to the bounded sequence $a_i^n$. Apply Rellich to its finitely many real coefficients and identify its strong $L^2$ limit with its weak $W^{1,2}$ limit by pairing against $L^2$ tests. Finite successive extractions give one subsequence for all $i$. The bounded Sobolev embedding into $L^4$ and the dual test $|a_i|^2a_i/\|a_i\|_4^3$ give $\|a_i\|_4\le C\epsilon$, precisely as in [F2]; interpolation with the strong $L^2$ convergence gives strong convergence in every $L^p$, $1\le p<4$, along this same subsequence. [F2, F5, step 1.1, choose, algebra]

3.1 **Boundary, curvature and ASD constraints.** By [F1], $\int\langle a_i^n,d\phi\rangle=0$ for every smooth $\phi$ near the closed ball. Strong $L^2$ convergence passes this identity to $a_i$, giving the asserted weak Coulomb and normal condition. Bilinearity and $|[X,Y]|\le2|X||Y|$ give $a_i^n\wedge a_i^n\to a_i\wedge a_i$ in $L^1$. Weak $W^{1,2}$ convergence then identifies the distributional curvature limit as $F_{a_i}$. All $F_{a_i^n}$ are uniformly bounded in $L^2$ by curvature covariance, so density of smooth $L^2$ tests extends the convergence to weak $L^2$ convergence, by the exact argument in [F2]. If $F_{A_i^n}^+=0$, unitary conjugation commutes with the Euclidean self-dual projection, hence $F_{a_i^n}^+=0$ and weak convergence gives $F_{a_i}^+=0$. [F1, F2, F5, step 2.1, algebra]

3.2 **Extraction of transition classes on all overlaps.** Write $h_n=h_{ij}^n$ on an overlap. Its transition equation and unitarity give $|h_n|=\sqrt2$ and $|dh_n|\le\sqrt2(|a_i^n|+|a_j^n|)$, hence uniformly bounded $W^{1,4}$ norms on every smaller ball. Cover each overlap by the countable family of balls with rational centers and rational radii whose doubled closed balls are inside the overlap. On each such ball, use [F5] to extract strong $L^2$ convergence and then an almost-everywhere convergent subsequence, componentwise. List all these extractions for the finitely many overlaps in one sequence. Choose nested infinite index subsequences, and at stage $k$ take the $k$th index of the $k$th nested sequence. These indices strictly increase and eventually belong to each earlier subsequence, so all its convergences hold. Limits agree almost everywhere on intersecting balls by uniqueness of the strong $L^2$ limit, giving a class $h$ on the whole overlap. Closedness of $SU(2)$ and the almost-everywhere convergence give $h\in SU(2)$ almost everywhere. Uniform boundedness gives $h_n\to h$ in every finite $L^q$ on compact subsets: for $q\ge2$, $\|h_n-h\|_q^q\le(2\sqrt2)^{q-2}\|h_n-h\|_2^2$, and Holder handles $q<2$. [F1, F5, F7, step 1.1, step 2.1, choose, construct, algebra]

4.1 **The limit transition equation and its regularity.** On a smaller ball, use $a_i^n\to a_i$ in $L^3$, the fixed bound on $h_n,h$ and $h_n\to h$ in $L^{12}$ to pass the right side of $dh_n=h_na_j^n-a_i^nh_n$ strongly in $L^3$: terms with a difference of forms use bounded matrices, and terms with $h_n-h$ use $L^{12}\cdot L^4\subset L^3$. Passing in distributional derivative tests proves $dh=ha_j-a_i h$ and $dh_n\to dh$ in $L^3$ locally. The limit equation also gives $dh\in L^4_{\mathrm{loc}}$ because $h$ is unitary and $a_i,a_j\in L^4$. The Coulomb property from step 3.1 therefore verifies every hypothesis of [F3], so $h\in W^{2,q}_{\mathrm{loc}}$ for every $2<q<4$, with its unique continuous $SU(2)$ representative. In particular $dh\in L^{12}$ on smaller balls by [F6]. [F3, F5, F6, step 2.1, step 3.1, step 3.2, algebra]

5.1 **A quantitative difference equation.** Fix $\overline B_r\subset B_{2r}\Subset U_i\cap U_j$, and a smooth $\chi$ supported in $B_{2r}$ and equal to one near $\overline B_r$. Let $B_n(v)=\sum_k((a_i^n)_kv_k-v_k(a_j^n)_k)$ and define $B$ using the limits. Extend $B_n|_{B_{2r}}$ by zero outside that ball. Its $L^4$ operator norm is at most $2C\epsilon\le\delta(8,s)$ by step 1.1. The full drift identity of [F3] gives, for $w_n=h_n-h$ and $v_n=\chi w_n$ extended by zero, $$-\Delta v_n=B_n\nabla v_n+f_n,$$ where $$f_n=\chi(B_n-B)\nabla h-B_n(w_n\,d\chi)-2\sum_k(\partial_k\chi)(\partial_k w_n)-(\Delta\chi)w_n.$$ Every term is compactly supported and in $L^s\cap L^2$. Moreover $\|f_n\|_s\to0$: the first term uses $B_n-B\to0$ in $L^3$ and $\nabla h\in L^{12}$ on the cutoff support, since $1/3+1/12=1/s$; the second uses bounded $B_n$ in $L^4$ and $w_n\to0$ in $L^6$, since $1/4+1/6=1/s$; the last two use $w_n\to0$ and $dw_n\to0$ in $L^3$, followed by finite-volume comparison since $s<3$. The weak products are justified by [F6]. [F3, F4, F5, F6, step 1.1, step 2.1, step 3.2, step 4.1, construct, algebra]

6.1 **Strong second-derivative convergence.** Each $v_n$ is compactly supported in $W^{1,2}$ with gradient in $L^4$, by steps 3.2–4.1 and boundedness of the matrices. Thus [F4] applies to the actual difference equation of step 5.1 and gives $\|\nabla v_n\|_6\le2K_s\|f_n\|_s\to0$ and $v_n\in W^{2,s}_{\mathrm{loc}}(\mathbb R^4)$. Compact support then gives global $W^{2,s}$ membership: a compact neighborhood of the support is covered by finitely many local regularity neighborhoods, and outside it all distributional derivatives vanish. Now apply the whole-space Laplace estimate in [F4] to obtain $\|D^2v_n\|_s\le C_s(\|f_n\|_s+\|B_n\|_4\|\nabla v_n\|_6)\to0$. Already $v_n\to0$ in $L^s$, and finite support gives $\nabla v_n\to0$ in $L^s$. Hence $h_n\to h$ strongly in $W^{2,s}(B_r)$. Such smaller balls cover every compact subset of the overlap, giving strong $W^{2,12/5}_{\mathrm{loc}}$ convergence. [F4, F5, step 3.2, step 4.1, step 5.1, algebra]

7.1 **Actual pointwise cocycle and limit connection data.** The continuous embedding in [F6] applied to the convergence of step 6.1 yields uniform convergence on smaller closed balls, hence on every compact subset of an overlap. For a point in a triple overlap, a sufficiently small closed ball lies in all three pairwise overlaps. Uniform convergence there passes the exact identity $h_{ij}^nh_{jk}^n=h_{ik}^n$ to $h_{ij}h_{jk}=h_{ik}$ at that point. The inverse and identity relations pass in the same way. The continuous representatives from step 4.1 agree with these uniform limits by uniqueness. Combined with the limit transition equation, these are precisely the compatible local connection and continuous cocycle data asserted in the statement. Full AC is used through [F1]–[F7] and the explicitly given diagonal extraction. Nothing here constructs an isomorphism from this limiting cocycle to any chosen fixed original cocycle. [F1, F2, F3, F4, F5, F6, F7, step 2.1, step 3.1, step 4.1, step 6.1, algebra] ∎

## Source notes

The complete statement and proof of Sil's Theorem 32, PDF pp.24–27, including its common-trivialization warning and final bundle-isomorphism step, were read. Here the fixed finite Euclidean ball cover is an explicit hypothesis, and the local small-curvature gauges are supplied by the newly constructed ball theorem. The transition difference equation and its strong convergence are reconstructed using the actual critical-drift inverse. No quoted patching-isomorphism theorem is imported: this lemma constructs the limit cocycle and its compatible weak connection, leaving identification with a fixed bundle as a distinct obligation. It also supplies no curved-metric regularity, singular removal, ASD transversality or gluing theorem.
