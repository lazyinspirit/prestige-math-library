---
id: ex-lower-and-upper-global-bases-in-a-small-highest-weight-module
kind: example
title: "Lower and upper global bases in a small highest weight module"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-contravariant-form-on-an-integrable-quantum-highest-weight-module, def-lower-global-basis-of-a-quantum-highest-weight-module, def-upper-global-basis-by-the-contravariant-form, lem-quantum-pascal-recurrence-and-gaussian-integrality, thm-existence-bar-invariance-and-uniqueness-of-the-lower-global-basis, thm-quantized-sl-two-string-formulas, thm-upper-and-lower-global-bases-are-dual-and-crystal-compatible]
justified_by: []
aliases: []
landmark: false
dependency_level: 17
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Masaki Kashiwara, On crystal bases of the q-analogue of universal enveloping algebras, Duke Mathematical Journal 63 (1991), 465–516"
      url: "https://webpages.math.luc.edu/~ptingley/oldseminars/QuantumGroupsSpring2011/Kashiwara91.pdf"
      locator: "§5.1–5.2, printed pp. 503–506: the polarization, Proposition 5.1.3 and Proposition 5.2.1; §6.1 for the integral lattice."
    - title: "George Lusztig, Introduction to Quantum Groups (Progress in Mathematics 110, Birkhauser, 1993; second printing 1994; author-hosted scan)"
      url: "https://math.mit.edu/~gyuri/papers/quant.gr.pdf"
      locator: "§§1.2.2–1.2.3 printed3/PDF12: distinct source half norm. Actual module norm d(a,n)=q_i^{n(a−n)}[a choose n] follows from the normalized early module form, not an identification with the Lusztig half form."
    - title: "Jonathan Brundan, Dual Canonical Bases and Kazhdan–Lusztig Polynomials, arXiv:math/0509700v2 (Transform. Groups 14 (2009), 535–558)"
      url: "https://arxiv.org/pdf/math/0509700v2"
      locator: "§§4–5, printed pp. 10–18: the upper/lower crystal lattice duality in type A, of which rank one is the smallest instance."
---

## Example

For the rank-one highest weight module $V(m\omega)$ use the divided string $w_n=F^{(n)}v_m$, $0\le n\le m$, which is the lower global basis, and the lower integral lattice $M_A=\bigoplus_{n=0}^mA w_n$. Its normalized polarization is diagonal,
$$B(w_n,w_s)=\delta_{ns}d_{m,n},\qquad d_{m,n}=q^{n(m-n)}\binom{m}{n}_q,$$
so the upper form-dual global basis is $w_n^{\mathrm{up}}=d_{m,n}^{-1}w_n$ and the restricted integral dual is $M_A^\vee=\bigoplus_{n=0}^mA\,d_{m,n}^{-1}w_n$. These two explicit $A$-lattices are the objects compared; no finite-index or determinant-unit property is presumed. For $m=1$ one has $d_{1,0}=d_{1,1}=1$ and the two bases coincide. For $m=2$ one has $d_{2,0}=d_{2,2}=1$ and $d_{2,1}=1+q^2$, so
$$M_A^\vee=Aw_0\oplus A(1+q^2)^{-1}w_1\oplus Aw_2\supsetneq M_A,$$
with middle quotient $A/(1+q^2)$. Both lattices extend to the same $A_0$ crystal lattice, and both bases have the same three crystal residues. The upper operators are the weighted adjoints of the duality theorem: their $q=0$ reductions give the same finite string, while exact lower adjunction differs by the displayed norm ratios, and the upper basis is fixed by the adjoint bar rather than the ordinary lower bar.

## Facts & Assumptions

**Given:** The rank-one string module of [[thm-quantized-sl-two-string-formulas]]; the lower global basis and its integral lattice [[def-lower-global-basis-of-a-quantum-highest-weight-module]], [[thm-existence-bar-invariance-and-uniqueness-of-the-lower-global-basis]]; the contravariant module form [[def-contravariant-form-on-an-integrable-quantum-highest-weight-module]]; the upper dual construction and mixed adjunctions [[def-upper-global-basis-by-the-contravariant-form]], [[thm-upper-and-lower-global-bases-are-dual-and-crystal-compatible]].

[L1] String and form recurrence: with $E F^{(n)}v=[m-n+1]F^{(n-1)}v$ and $\sigma(F)=q^{-1}KE$, the normalized module form satisfies $d_{m,n}=q^{m-2n+1}\frac{[m-n+1]}{[n]}\,d_{m,n-1}$ with $d_{m,0}=1$; distinct labels are orthogonal ([[thm-quantized-sl-two-string-formulas]], [[def-contravariant-form-on-an-integrable-quantum-highest-weight-module]]).

[L2] Closed form: iterating the recurrence gives $d_{m,n}=q^{n(m-n)}\binom{m}{n}_q$ ([[lem-quantum-pascal-recurrence-and-gaussian-integrality]]).

[L3] Upper duality: the upper basis is the inverse-Gram field dual, the dual charts are spanned by the same vectors over $A_0$ and $A_\infty$, and the exact mixed adjunctions hold with the displayed norm ratios ([[thm-upper-and-lower-global-bases-are-dual-and-crystal-compatible]]).

[L4] Residues: at $q=0$ the coefficient rings give $A_0$ with $d_{m,n}$ a unit congruent to $1$, so both the lower and upper basis vectors reduce to the same crystal class; the ordinary bar acts on coefficients by $q\mapsto q^{-1}$, while the adjoint bar is the one fixing the upper basis ([[def-upper-global-basis-by-the-contravariant-form]]).

## Proof

**Proof technique:** direct.

1.1 **The norms.** The recurrence of [L1] with base $d_{m,0}=1$ gives the diagonal values; iterating it produces the closed form $d_{m,n}=q^{n(m-n)}\binom{m}{n}_q$ of [L2], and orthogonality between distinct labels makes the Gram matrix diagonal. [L1, L2]

1.2 **Common crystal lattice and residues.** Since $1+q^2$ is a unit of $A_0$ congruent to $1$ modulo $q$, both $M_A$ and $M_A^\vee$ extend to the same $A_0$-lattice, and the residues of $w_n$ and $w_n^{\mathrm{up}}$ are the same crystal class $b_n$; the upper operators are the weighted adjoints whose $q=0$ reductions reproduce the same partial-inverse string, while exact adjunction carries the ratios $d_{m,n}/d_{m,n\pm1}$ given by the duality theorem and therefore holds only modulo $q$, not exactly over $\mathbb Q(q)$. [L3, L4]

1.3 **Bars.** The ordinary bar fixes $w_1$ but sends its upper denominator to $1+q^{-2}$, so it moves $w_1^{\mathrm{up}}$; the adjoint bar $\psi^\vee$ is characterized by $B(\psi u,\psi^\vee v)=\overline{B(u,v)}$ and, on the diagonal form, fixes each $w_n^{\mathrm{up}}$. This is exactly the distinction between lower-bar and adjoint-bar fixedness asserted by the duality theorem, and no lower/upper basis equality is implied. [L3, L4]

2.1 **The two lattices for $m=2$.** Substituting $m=2$: $d_{2,0}=1$, $d_{2,1}=q\binom{2}{1}_q=q(q+q^{-1})=1+q^2$, $d_{2,2}=1$. Hence $M_A=\bigoplus Aw_n$ and $M_A^\vee=Aw_0\oplus A(1+q^2)^{-1}w_1\oplus Aw_2$, whose middle coefficient module $A/(1+q^2)$ is nonzero; in particular $M_A^\vee$ properly contains $M_A$ and the inclusion is not an isomorphism. For $m=1$, $d_{1,0}=d_{1,1}=1$ and the two lattices coincide. [L2, step 1.1]

3.1 **Conclusion.** Steps 1.1–1.4 compute the rank-one norms, compare the two genuine $A$-lattices, exhibit the common crystal lattice and residues with only modulo-$q$ adjoint agreement, and identify the correct bar. All calculations are finite and use no determinant-unit assumption. [step 1.1, step 2.1, step 1.2, step 1.3] ∎
