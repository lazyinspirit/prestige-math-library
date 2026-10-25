---
verification:
  repair: research/math-library-rendering-repairs-2026-10-23/receipts/ex-the-rank-two-bott-samelson-bimodule-and-its-character-decomposition.json
  precheck: pass
id: ex-the-rank-two-bott-samelson-bimodule-and-its-character-decomposition
kind: example
title: "The rank-two Bott-Samelson bimodule $B_sB_t$: character, decomposition and the braid relation"
status: published
origin: pipeline
pipeline_run: frontier-44-special-representation-examples-28
dependency_level: 1
deps: [def-real-type-a-soergel-category-and-scalar-extension, lem-the-type-a-standard-character-is-multiplicative, def-type-a-standard-graph-bimodules-support-filtrations-and-character, thm-rank-two-type-a-soergel-bimodule-decompositions, def-bott-samelson-bimodule-of-a-word, thm-split-grothendieck-group-of-the-soergel-category-is-the-type-a-hecke-algebra, thm-existence-and-uniqueness-of-the-kazhdan-lusztig-basis]
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
      locator: "Sections 3.4-3.5 (Bott-Samelson bimodules and characters) and the rank-two decompositions quoted in the introduction; Section 3.2 for the bar-invariant computation"
    - title: "Soergel, Kazhdan-Lusztig-Polynome und unzerlegbare Bimoduln ueber Polynomringen (arXiv:math/0403496, published J. Inst. Math. Jussieu 6 (2007) 501-525)"
      url: "https://arxiv.org/pdf/math/0403496"
      locator: "Theorem 4.2 and Proposition 4.6 (the dihedral computation of the character and the Kazhdan-Lusztig basis in rank two)"

---

## Example

Take $n=3$ and the two simple reflections $s=s_1$, $t=s_2$. The rank-two Bott-Samelson bimodule $B_sB_t$ has character
$$\operatorname{ch}(B_sB_t)=\operatorname{ch}(B_s)\operatorname{ch}(B_t)=(H_s+v)(H_t+v)=H_{st}+vH_s+vH_t+v^2$$
in the standard basis, so its $\Delta$-multiplicities are $1$ at $H_{st}$, $1$ at $H_s$ and at $H_t$ with shift $v$, and $1$ at the identity with shift $v^2$; in particular all multiplicities are non-negative and $\dim(\overline{B_sB_t})=v^2+2+v^{-2}$, whose value at $v=1$ is the ordinary real dimension $4$. In $S_3$ the product $st$ has length $2$ and $B_{st}$ has the same character $\underline H_{st}=H_{st}+vH_s+vH_t+v^2$, so $B_sB_t=B_{st}$ is already indecomposable; equivalently the only summand is the top one $B_{st}$ and all multiplicities $m_y$ for $y<st$ vanish. Similarly $B_sB_tB_s=B_{sts}\oplus B_s$ with characters $\underline H_{sts}+\underline H_s$, whereas $B_tB_sB_t=B_{sts}\oplus B_t$; the two Bott-Samelson products are not isomorphic; the example also verifies the rank-two values of the Kazhdan-Lusztig polynomials $P_{e,st}=P_{s,st}=P_{t,st}=1$ used on the companion page.

## Verification

**Proof technique:** direct; multiplicativity of the character, the explicit two-letter Hecke computation, and comparison with the rank-two decomposition.

**Given:** The simple reflections $s=s_1$, $t=s_2$ of $S_3$, the one-letter bimodules $B_s,B_t$ and the Bott-Samelson product $B_sB_t$ ([[def-bott-samelson-bimodule-of-a-word]], [[def-real-type-a-soergel-category-and-scalar-extension]]), the character with its $\Delta$-multiplicities ([[def-type-a-standard-graph-bimodules-support-filtrations-and-character]], [[lem-the-type-a-standard-character-is-multiplicative]]), the normalized Hecke algebra with its two bases and $\underline H_s=H_s+v$ ([[thm-existence-and-uniqueness-of-the-kazhdan-lusztig-basis]]), the rank-two decomposition theorem ([[thm-rank-two-type-a-soergel-bimodule-decompositions]]).

[F1] The character is multiplicative and satisfies $\operatorname{ch}(B_{s_i})=H_{s_i}+v$; the coefficient of $H_y$ in $\operatorname{ch}(M)$ is $\sum_d(M:\Delta_y(d))v^d$, and the reduced dimension of a layer $\Delta_y(d)$ is one in degree $\ell(y)-d$ ([[lem-the-type-a-standard-character-is-multiplicative]], [[def-type-a-standard-graph-bimodules-support-filtrations-and-character]]).

[F2] The standard basis of the Hecke algebra multiplies by $H_uH_s=H_{us}$ when $\ell(us)=\ell(u)+1$; the Kazhdan-Lusztig basis is the unique basis $\underline H_w\in H_w+\sum_{y<w}v\mathbb Z[v]H_y$ of bar-invariant elements ([[thm-existence-and-uniqueness-of-the-kazhdan-lusztig-basis]]).

[F3] The rank-two decomposition theorem: $B_sB_tB_s\cong B_{sts}\oplus B_s$ with no shifts; exchanging $s$ and $t$ gives $B_tB_sB_t\cong B_{sts}\oplus B_t$ ([[thm-rank-two-type-a-soergel-bimodule-decompositions]]).

[F4] The polynomial ring has only nonnegative degrees and degree-zero part $\mathbb R$. The generator has left basis $1\otimes1,1\otimes x_i$ for $s_i$, since $S=S^{s_i}\oplus x_iS^{s_i}$; tensor products have the corresponding finite left bases ([[def-real-type-a-soergel-category-and-scalar-extension]]).

1.1 **The character of the two-letter product.** By [F1] and multiplicativity, $\operatorname{ch}(B_sB_t)=(H_s+v)(H_t+v)=H_sH_t+vH_s+vH_t+v^2$; since $st$ is reduced, [F2] gives $H_sH_t=H_{st}$, so the standard-basis expansion is $H_{st}+vH_s+vH_t+v^2$. Its coefficients give the multiplicities $1,1,1,1$ displayed, and reading the layers through [F1] the reduced degrees are $2,0,0,-2$, so the graded dimension is $v^2+2+v^{-2}$ and the ordinary real dimension is $4$. [given, F1, F2]

2.1 **The Kazhdan-Lusztig element of $st$.** Put $A:=v-v^{-1}$ and $J:=H_{st}+v(H_s+H_t)+v^2$; then $J\in H_{st}+v\mathbb Z[v]H_s+v\mathbb Z[v]H_t+v^2\mathbb Z[v]$. Since $H_s^{-1}=H_s+A$, $H_t^{-1}=H_t+A$ and $\overline{H_{st}}=H_{ts}^{-1}=H_s^{-1}H_t^{-1}=(H_s+A)(H_t+A)=H_{st}+A(H_s+H_t)+A^2$ (the last identity uses $H_sH_t=H_{st}$), applying the semilinear involution gives $\overline J=\overline{H_{st}}+v^{-1}(\overline{H_s}+\overline{H_t})+v^{-2}=H_{st}+A(H_s+H_t)+A^2+v^{-1}(H_s+H_t)+2v^{-1}A+v^{-2}$, whose coefficients are $A+v^{-1}=v$ at $H_s+H_t$ and $A^2+2v^{-1}A+v^{-2}=(v^2-2+v^{-2})+(2-2v^{-2})+v^{-2}=v^2$ at $H_e$; hence $\overline J=J$, and by uniqueness [F2], $J=\underline H_{st}$. [step 1.1, F2]

3.1 **Indecomposability of $B_sB_t$.** The unshifted tensor $M=S\otimes_{S^s}S\otimes_{S^t}S$ is generated as a bimodule by $1\otimes1\otimes1$. To see this, write a middle polynomial as $h_0+x_1h_1$ with $h_0,h_1\in S^s$, which slide to the first slot. The remaining $x_1$ slides to the last slot because $t=s_2$ fixes $x_1$. Therefore every tensor is a sum of $p(1\otimes1\otimes1)q$. After the shift $(2)$ its lowest component is one-dimensional in degree $-2$, by its finite left tensor basis and $S_0=\mathbb R$. A degree-zero bimodule endomorphism must send the generator to a scalar multiple of itself, and generation forces that same scalar on all of $M$. Hence its degree-zero endomorphism algebra is $\mathbb R$, with no nontrivial idempotent, so $B_sB_t$ is indecomposable. The balanced map $p\otimes q\otimes r\mapsto p\,s(q)\,st(r)$ is surjective onto the $st$ graph bimodule, showing that this indecomposable has the top graph of its reduced word; it is the normalized summand $B_{st}$. Thus $B_sB_t\cong B_{st}$ with no lower summands, independently of the Hom formula. [step 1.1, step 2.1, F4, algebra]

4.1 **The three-letter braid relation.** By multiplicativity and the products computed in steps 1.1 and 2.1, $\operatorname{ch}(B_sB_tB_s)=\underline H_s\underline H_t\underline H_s=\underline H_{st}\underline H_s$; expanding with the Hecke relations gives $\underline H_{st}\underline H_s=\underline H_{sts}+\underline H_s$ Indeed the expansion is $J_0+H_s+v$ where $J_0=H_{sts}+v(H_{st}+H_{ts})+v^2(H_s+H_t)+v^3$. The element $J_0=\underline H_{st}\underline H_s-\underline H_s$ is bar fixed, with triangular lower coefficients in $v\mathbb Z[v]$, so uniqueness in [F2] identifies it with $\underline H_{sts}$. The ordinary real dimensions of the reductions add to $6+2=8$. Exchanging $s$ and $t$ in [F3] gives $B_tB_sB_t\cong B_{sts}\oplus B_t$, whose character differs by $\underline H_t-\underline H_s=H_t-H_s\ne0$, so these Bott-Samelson products are not isomorphic; the rank-two Kazhdan-Lusztig data $P_{e,st}=P_{s,st}=P_{t,st}=1$ are the coefficients displayed in step 2.1. This verifies the example. [step 2.1, step 3.1, F3] ∎

## Remarks

- The reduction to rank two is essential here: the computation uses the explicit two- and three-letter decompositions and is an illustration only; the design of the page forbids its use as a supplier inside the general induction, whose base is computed on the axiom page.
- The two-letter indecomposability is established by its scalar degree-zero endomorphisms; the triple decomposition is the explicit rank-two theorem. Neither computation uses the general character theorem.
