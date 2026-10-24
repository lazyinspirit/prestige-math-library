---
id: lem-arith-affine-codimension-one-neighbourhood-and-divisors
kind: lemma
title: "Affine codimension-one neighbourhoods and divisors"
status: published
origin: pipeline
pipeline_run: frontier-40-geometry-braids-rep-27
deps:
  - def-axiom-of-choice
  - def-dependent-choice
  - lem-ag-flat-local-regularity-ascent-descent
  - thm-ag-standard-smooth-geometric-regularity
  - thm-nonaffine-regular-local-ring-is-ufd
  - thm-line-bundle-rational-section-cartier-divisor
  - lem-normal-noetherian-domain-intersection-of-height-one-localizations
  - lem-scheme-zariski-main-factorization-quasi-finite
  - thm-valuative-criterion-properness
  - thm-valuative-criterion-separatedness
  - lem-finite-prime-avoidance
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
sources:
  references:
    - title: "Bosch, Lutkebohmert, Raynaud, Neron Models (1990), 6.4/4 and 6.5 condition (a); local proof in owner-arithmetic-models/neron-source/closure-supplement.md"
      url: "https://www.math.stonybrook.edu/~kamenova/homepage_files/Bosch_Raynaud_Neron_Model_tc.pdf"
---

## Statement

Assume AC and DC as inherited from the supplied algebra and scheme results.

(a) On a finite-type separated normal scheme over an affine Noetherian base, finitely many points of codimension at most one lie in a single affine open subscheme.

(b) For a normal Noetherian separated scheme $X$ and a dense affine open subscheme $U\subseteq X$, the complement $X\setminus U$ has pure codimension one in $X$; if $X$ is regular in addition, its reduced support is an effective Cartier divisor. If $X$ is flat over a discrete valuation ring and $U$ meets every irreducible component of the special fibre, then $X\setminus U$ is the closure of its generic fibre complement, so it contains no special-fibre component.

## Facts & Assumptions

**Given:** AC and DC, an affine Noetherian base ring $R$ and a finite-type separated normal $R$-scheme $X$ with points $x_1,\dots,x_n$ of codimension at most one.

[F1] Valuative uniqueness holds for separated schemes: a valuation ring admits at most one centre on a separated scheme dominating a given centre ([[thm-valuative-criterion-separatedness]], [[thm-valuative-criterion-properness]]); at distinct codimension-one points this identifies the normal local rings $\mathcal O_{X,x_i}$ with distinct DVRs in the function field.

[F2] Hartogs for normal Noetherian domains: a rational function on a normal Noetherian domain which is regular at every height-one point is regular ([[lem-normal-noetherian-domain-intersection-of-height-one-localizations]], assuming AC); the scheme Zariski Main Theorem and the regular-local UFD property give the corresponding divisorial statements ([[lem-scheme-zariski-main-factorization-quasi-finite]], [[thm-nonaffine-regular-local-ring-is-ufd]], [[lem-ag-flat-local-regularity-ascent-descent]], [[thm-ag-standard-smooth-geometric-regularity]]).

[F3] Rational sections of line bundles correspond to Cartier divisors, and finite prime avoidance is available ([[thm-line-bundle-rational-section-cartier-divisor]], [[lem-finite-prime-avoidance]]).

## Proof

**Proof technique:** direct. Approximation for finitely many inequivalent valuations produces a common affine neighbourhood of the given points, and Hartogs controls complements of dense affine opens.

1.1 Reduce to a connected normal component of $X$. Its generic point lies in every nonempty affine open, so discard it from the list; if the list becomes empty, any affine open suffices. Remove repeated points. For the remaining codimension-one points put $V_i=\mathcal O_{X,x_i}$, viewed as rank-one valuation rings in the common function field $L$. The $V_i$ are pairwise distinct: if two points $x_i\ne x_j$ gave centres of the same valuation of $L$, both would dominate the same valuation ring and separatedness would force $x_i=x_j$ by [F1]. Two distinct rank-one valuation rings in $L$ are incomparable: if $V\subseteq W$ and the uniformizer $\pi$ of $V$ is invertible in $W$, then $L=V[1/\pi]\subseteq W$, so $W$ is a field, and otherwise every $x\notin V$ has inverse in $\pi V$ and cannot lie in $W$; hence inclusion forces equality. [F1, given, algebra]

2.1 Fix $i$ and, for each $j\ne i$, choose $y_{ij}\in V_i\setminus V_j$. Multiplying a sufficiently high power of $y_{ij}$ by a uniformizer of $V_i$ gives $z_{ij}$ with $v_i(z_{ij})>0$ and $v_j(z_{ij})<0$. If there is only one valuation, take $h_i$ to be its uniformizer; otherwise begin with one $z_{ij}$ and construct $h_i$ successively: to add a new index $j$, replace the preceding sum $h$ by $h+z_{ij}^M$. Choose $M$ so large that its new term has strictly smaller valuation than $h$ at $j$ and at every earlier index where $z_{ij}$ has negative valuation. At an earlier index where that valuation is nonnegative, the old negative valuation persists. Thus cancellation is excluded at every required index, and $v_i(h_i)>0$, $v_j(h_i)<0$ for all $j\ne i$. Put $e_i=1/(1+h_i^N)$. Increasing $N$ makes $v_i(e_i-1)$ and all $v_j(e_i)$ for $j\ne i$ arbitrarily large. For prescribed targets $c_i\in L$, the sum $\sum_ie_ic_i$ consequently approximates $c_j$ at every $v_j$ to any fixed finite precision. [F1, step 1.1, construct]

3.1 Let $C=\bigcap_iV_i$. The residue map $C\to\kappa(V_i)$ is surjective: approximate a representative in $V_i$ modulo its maximal ideal and approximate zero at all other valuations, using step 2.1. Thus its kernel $\mathfrak m_i=\{c\in C:v_i(c)>0\}$ is maximal. These are all the maximal ideals: an element of $C$ is invertible exactly when all its valuations vanish, so the nonunits are the union of the $\mathfrak m_i$, and finite prime avoidance [F3] makes every maximal ideal one of the $\mathfrak m_i$. The approximation of step 2.1 separates the $\mathfrak m_i$, realizes arbitrary prescribed residues, and shows $C_{\mathfrak m_i}=V_i$: for $x\in V_i$ one approximates $1$ at $i$ and $0$ to high order at the other indices by some $t\in C$, and then $tx\in C$ with $t\notin\mathfrak m_i$, so $x=(tx)/t\in C_{\mathfrak m_i}$, the reverse inclusion being immediate. [F3, step 2.1, algebra]

4.1 Choose affine charts $W_i=\operatorname{Spec}B_i$ around $x_i$ and finite $R$-algebra generators $b_{il}$ of $B_i$. By step 3.1 write $b_{il}=a_{il}/s_{il}$ with $a_{il},s_{il}\in C$ and $s_{il}\notin\mathfrak m_i$. Let $C_0\subseteq C$ be the $R$-algebra generated by all these numerators and denominators, and put $s_i=\prod_ls_{il}$, so $B_i\subseteq(C_0)_{s_i}$ inside $L$. Each of the finitely many generators of $C_0$ lies in $(B_i)_{\mathfrak p_i}=V_i$, where $\mathfrak p_i$ represents $x_i$. Writing those generators as fractions in $(B_i)_{\mathfrak p_i}$ and multiplying their denominators gives $t_i\in B_i\setminus\mathfrak p_i$ with $C_0\subseteq(B_i)_{t_i}$. Since $t_i\in(C_0)_{s_i}$, write $t_i=d_i/s_i^{N_i}$ with $d_i\in C_0$; both $s_i$ and $d_i$ are units in $V_i$. The two inclusions just constructed induce mutually inverse homomorphisms, inside $L$, between $(C_0)_{s_id_i}$ and $(B_i)_{t_i}[1/s_i]$: $B_i$ lies in $(C_0)_{s_i}$ and $t_i$ becomes invertible after inverting $d_i$, while $C_0$ lies in $(B_i)_{t_i}$ and $d_i=t_is_i^{N_i}$ becomes invertible after inverting $s_i$. All defining relations and both inverse identities hold because these are subrings of the same field. To identify an actual principal open of $W_i$, write $s_i=r_i/t_i^{M_i}$ in $(B_i)_{t_i}$; then $r_i\notin\mathfrak p_i$ and $(B_i)_{t_i}[1/s_i]=(B_i)_{t_ir_i}$. Thus $U_i=D_{W_i}(t_ir_i)$ contains $x_i$ and is isomorphic to $D_{\operatorname{Spec}C_0}(s_id_i)$. [step 3.1, construct, algebra]

5.1 The inverse morphisms $D(s_id_i)\to U_i\subseteq X$ agree on every overlap: they agree at the common generic point, their source is integral, and separatedness of $X$ makes their equalizer closed. Their maps to $\operatorname{Spec}C_0$ likewise agree on overlaps of the $U_i$, since all are defined by the inclusion $C_0\subseteq L$. Consequently these isomorphisms glue to an isomorphism from the open $W=\bigcup_iU_i\subseteq X$ onto the open $\bigcup_iD(s_id_i)\subseteq\operatorname{Spec}C_0$. Let $J$ define its closed complement. For every prime $\mathfrak q_i$ corresponding to $x_i$, $J\nsubseteq\mathfrak q_i$; finite prime avoidance gives $f\in J\setminus\bigcup_i\mathfrak q_i$. Then $D(f)\subseteq W$ is affine and contains all $x_i$. A normal Noetherian scheme has finitely many disjoint open and closed integral components; applying this construction on each component with a prescribed point and taking the finite disjoint union gives (a), including any generic points discarded in step 1.1. [F1, F3, step 4.1, construct]

6.1 For (b), work on one integral component of $X$, with function field $L$, and write $U=\operatorname{Spec}A$ there. If an irreducible component of the closed boundary has generic point $z$ of codimension at least two, choose an affine normal chart $V=\operatorname{Spec}B$ containing $z$ and avoiding every other boundary component. Every height-one point of $V$ then belongs to $U$. For each $a\in A\subseteq L$, its restriction to $U\cap V$ is regular at all these points, so [F2] places $a$ in $B$. This gives a single ring homomorphism $A\to B$: sums, products, the unit and every relation are preserved inside $L$. Thus it defines an actual morphism $h:V\to U$, with no finite-generation assumption on $A$ needed. On the dense open $U\cap V$ it is the identity inclusion into $U$; separatedness of $X$ makes the composite $V\xrightarrow{h}U\hookrightarrow X$ equal to the inclusion $V\hookrightarrow X$ everywhere. Its image would put $z$ in $U$, a contradiction. Hence every boundary component has codimension one. If $X$ is regular, at each point its finitely many boundary prime ideals are principal in the regular local UFD. Their intersection is generated by the product of their distinct prime generators, a nonzerodivisor; these reduced ideals glue to the reduced boundary subscheme, making it an effective Cartier divisor. The same argument on the finitely many normal components proves (b) for general $X$. [F2, step 5.1, algebra]

7.1 Finally let $X$ be flat over a discrete valuation ring and let $U$ meet every irreducible component of the special fibre. A prime divisor $P$ contained in the boundary $X\setminus U$ and dominating the base would meet the generic fibre; a prime divisor contained in the special fibre would be a component of it, which is excluded by the fibre-density hypothesis. Hence every boundary prime meets the generic fibre, so the closure of the generic complement $X_K\setminus U_K$ contains the whole boundary and is contained in it by closedness; the boundary is therefore the closure of its generic complement and contains no special-fibre component. [F2, step 6.1, algebra] ∎ 