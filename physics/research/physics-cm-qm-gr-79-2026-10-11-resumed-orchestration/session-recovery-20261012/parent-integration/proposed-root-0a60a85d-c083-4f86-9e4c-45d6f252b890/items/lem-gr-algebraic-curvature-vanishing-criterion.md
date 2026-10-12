---
id: lem-gr-algebraic-curvature-vanishing-criterion
kind: lemma
title: "A curvature tensor vanishes if the tidal operator vanishes for every timelike direction"
status: draft
origin: session
domain: mathematics
dependency_level: 12
provenance:
  statement: ai-altered
  proof: ai-generated
proof_strategy: direct
deps: [def-gr-curvature-tensor-and-derived-tensors, thm-gr-curvature-tensoriality-and-coordinate-formula, thm-gr-curvature-algebraic-symmetries, def-gr-smooth-lorentzian-objects, def-causal-classification-of-lorentz-vectors, def-gr-tensor-fields-and-components, thm-nonzero-real-polynomial-has-at-most-degree-many-distinct-roots, def-continuity-real]
dependency_roles:
  def-gr-curvature-tensor-and-derived-tensors: mathematical-premise
  thm-gr-curvature-tensoriality-and-coordinate-formula: mathematical-premise
  thm-gr-curvature-algebraic-symmetries: mathematical-premise
  def-gr-smooth-lorentzian-objects: mathematical-premise
  def-causal-classification-of-lorentz-vectors: mathematical-premise
  def-gr-tensor-fields-and-components: mathematical-premise
  thm-nonzero-real-polynomial-has-at-most-degree-many-distinct-roots: mathematical-premise
  def-continuity-real: mathematical-premise
sources:
  references:
    - title: "H. S. Reall, Part III General Relativity (Cambridge, October 12, 2022 revision), section 4.5, Remark 1: the relative acceleration vanishes for all families of geodesics if and only if the connection is flat, printed pp. 47-48 (PDF pp. 48-49)"
      url: "https://web.archive.org/web/20230323191108id_/https://www.damtp.cam.ac.uk/user/hsr1000/part3_gr_lectures.pdf"
    - title: "S. M. Carroll, Lecture Notes on General Relativity, arXiv:gr-qc/9712019v1 (1997), Ch. 3: the physical reading of the geodesic deviation equation as tidal acceleration and the identification of curvature as the tidal field, printed pp. 86-88 (PDF pp. 93-95)"
      url: "https://arxiv.org/pdf/gr-qc/9712019"
    - title: "E. Minguzzi, Lorentzian causality theory, Living Reviews in Relativity 22 (2019), section 6.1: the endomorphism R_u(X)=R(X,u)u and its trace, printed pp. 159-160 (PDF pp. 159-160)"
      url: "https://link.springer.com/content/pdf/10.1007/s41114-019-0019-x.pdf"
verification:
  precheck: pass
---

## Statement

Let $(M,g,N)$ be a time-oriented smooth Lorentzian four-manifold
([[def-gr-smooth-lorentzian-objects]]) and let $p\in M$. Let
$R_p:(T_pM)^4\to\mathbb R$ be an **algebraic curvature tensor at $p$**: an
$\mathbb R$-multilinear map whose components $R_{abcd}$ in a basis
([[def-gr-tensor-fields-and-components]]) satisfy
$$R_{abcd}=-R_{bacd}=-R_{abdc}=R_{cdab},\qquad R_{abcd}+R_{acdb}+R_{adbc}=0$$
for all $a,b,c,d$. Suppose that for every timelike $T\in T_pM$, every
$J\in T_pM$ and every $W\in T_pM$,
$$R_{abcd}W^aT^bT^cJ^d=0 .$$
Equivalently (by nondegeneracy of $g_p$), the **tidal operator**
$J\mapsto R(T,J)T$ is zero for every timelike $T$, where $R(T,J)T$ is the
vector with $g_p\bigl(R(T,J)T,W\bigr)=R_{abcd}W^aT^bT^cJ^d$ for all $W$. Then
$R_p=0$.

## Facts & Assumptions

**Given:** A point $p$ of a time-oriented smooth Lorentzian four-manifold and an algebraic curvature tensor $R_p$ at $p$ whose tidal operator vanishes for every timelike direction.

[L1] The timelike set $\{T\in T_pM:g_p(T,T)<0\}$ has exactly two connected components, each nonempty, open and convex; in particular there is a timelike $T_0$ and the timelike set contains a nonempty open set ([[def-gr-smooth-lorentzian-objects]] clause (b), [[def-causal-classification-of-lorentz-vectors]]).

[L2] In a basis of $T_pM$ the components of a tensor are real numbers and a tensor vanishes if and only if all its components in one — equivalently every — basis vanish; indices are raised and lowered with $g_p$ and its inverse ([[def-gr-tensor-fields-and-components]] clauses (a)-(c), [[thm-gr-curvature-tensoriality-and-coordinate-formula]] clause (a)).

[L3] For fixed $a,d$ and fixed $v\in T_pM$, the function $\lambda\mapsto R_{abcd}(v+\lambda T_0)^b(v+\lambda T_0)^c$ is a polynomial in $\lambda$ of degree at most $2$, a finite sum of products of at most two affine functions of $\lambda$ ([[def-gr-tensor-fields-and-components]] clause (a), [[def-continuity-real]]).

[L4] A nonzero real polynomial of degree at most $2$ has at most $2$ distinct real roots ([[thm-nonzero-real-polynomial-has-at-most-degree-many-distinct-roots]]).

[L5] If $g_p(T_0,T_0)<0$, then $g_p(v+\lambda T_0,v+\lambda T_0)=\lambda^2g_p(T_0,T_0)+2\lambda g_p(v,T_0)+g_p(v,v)$ tends to $-\infty$ as $|\lambda|\to\infty$; hence $v+\lambda T_0$ is timelike for all sufficiently large $|\lambda|$ ([[def-gr-smooth-lorentzian-objects]], [[def-causal-classification-of-lorentz-vectors]], algebra).

## Proof

**Proof technique:** direct.

1.1 (The quadratic contraction vanishes on all timelike vectors.) Fix indices $a,d$ and put $Q(v):=R_{abcd}v^bv^c$ for $v\in T_pM$. Taking $W$ and $J$ to be basis vectors in the hypothesis gives $R_{abcd}T^bT^c=0$ for every timelike $T$; that is, $Q(T)=0$ for every timelike $T$. [given, L2, algebra]

2.1 (Extension to all vectors.) Fix $v\in T_pM$ and a timelike $T_0$, which exists by [L1]. By [L3], $\lambda\mapsto Q(v+\lambda T_0)$ is a polynomial of degree at most $2$, and by [L5] the argument $v+\lambda T_0$ is timelike for all sufficiently large $|\lambda|$, so by step 1.1 this polynomial has infinitely many roots. By [L4] the polynomial is identically zero, and evaluating at $\lambda=0$ gives $Q(v)=0$. Since $v$ was arbitrary, $Q\equiv0$ for the fixed pair $(a,d)$; as $a,d$ were arbitrary, $R_{abcd}v^bv^c=0$ for all $a,b,c,d$ and all $v\in T_pM$. [step 1.1, L1, L3, L4, L5, algebra]

3.1 (Polarization gives antisymmetry in the middle pair.) For arbitrary $u,w\in T_pM$, step 2.1 applied to $u+w$, $u$ and $w$ gives $0=Q(u+w)-Q(u)-Q(w)=R_{abcd}u^bw^c+R_{abcd}w^bu^c$. Relabelling the summed pair $(b,c)$ in the second term turns it into $R_{acbd}u^bw^c$, so $(R_{abcd}+R_{acbd})u^bw^c=0$ for all $u,w$ and all $a,d$. Choosing $u,w$ to be basis vectors gives $R_{abcd}=-R_{acbd}$ for all indices, that is, $R$ is antisymmetric in its second and third slots. [step 2.1, L2, algebra]

4.1 (Bianchi cancellation.) Using step 3.1 with the given last-pair skew, $R_{acdb}=-R_{acbd}=R_{abcd}$: the first equality is the skew-symmetry in the last two slots, the second is step 3.1. Similarly, $R_{adcb}=-R_{acdb}$ by step 3.1 applied to the slots $(b,c)$ of $R_{adcb}$, so $R_{adbc}=-R_{adcb}=R_{acdb}=R_{abcd}$, where the first equality is the last-pair skew. The algebraic Bianchi identity of the statement therefore gives $0=R_{abcd}+R_{acdb}+R_{adbc}=3R_{abcd}$; since $\mathbb R$ has characteristic $0$, $R_{abcd}=0$ for all $a,b,c,d$, and by [L2] $R_p=0$. [step 3.1, given, L2, algebra] ∎

## Remarks

- **The hypothesis must hold for every timelike direction.** A single observer with vanishing tidal operator does not force $R_p=0$; a nonzero algebraic curvature tensor supported on a spacelike three-space has zero tidal operator for a suitable timelike direction. The passage from one direction to all directions is what step 2.1 exploits, through the fact that the timelike set is open and the contraction is polynomial in the direction.

- **Geometric reading.** For the curvature tensor of the metric-selected connection the symmetry hypotheses of the statement hold by [[thm-gr-curvature-algebraic-symmetries]], and by [[thm-gr-jacobi-equation-and-geodesic-deviation]] the tidal operator is exactly the relative-acceleration operator of a family of geodesics. The lemma is the algebraic core of the statement that curvature is precisely what free-fall relative acceleration detects; the physical comparison is a separate item.
