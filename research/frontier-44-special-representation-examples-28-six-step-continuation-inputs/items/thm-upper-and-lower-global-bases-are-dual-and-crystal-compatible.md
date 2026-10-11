---
id: thm-upper-and-lower-global-bases-are-dual-and-crystal-compatible
kind: theorem
title: "Upper and lower global bases are dual and crystal compatible"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-axiom-of-choice, def-contravariant-form-on-an-integrable-quantum-highest-weight-module, def-upper-global-basis-by-the-contravariant-form, lem-crystal-lattice-polarizations-are-perfect-at-q-zero, lem-integral-crystal-residues-of-the-negative-half-represent-the-crystal-basis, lem-the-lusztig-integral-form-is-stable-under-bar-and-contravariant-duality, thm-existence-bar-invariance-and-uniqueness-of-the-lower-global-basis, thm-the-highest-weight-crystal-triple-is-balanced]
justified_by: []
aliases: []
landmark: false
dependency_level: 16
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Masaki Kashiwara, On crystal bases of the q-analogue of universal enveloping algebras, Duke Mathematical Journal 63 (1991), 465–516"
      url: "https://webpages.math.luc.edu/~ptingley/oldseminars/QuantumGroupsSpring2011/Kashiwara91.pdf"
      locator: "§5.1–5.2, printed pp. 503–506: Propositions 5.1.3, 5.2.1 and 5.2.4; §6.1, printed pp. 507–509: Proposition 6.1.1 and Corollary 6.1.2 for the integral duality and the $*$-stability of the lattices."
    - title: "George Lusztig, Introduction to Quantum Groups (Progress in Mathematics 110, Birkhauser, 1993; second printing 1994; author-hosted scan)"
      url: "https://math.mit.edu/~gyuri/papers/quant.gr.pdf"
      locator: "§§1.2.2–1.2.3 printed3/PDF12 fixes the source form. Weightwise restricted A-perfectness and weighted adjunction are local inverse-Gram/string proofs, not a claim that the lower Laurent Gram matrix is A-unimodular."
    - title: "Jonathan Brundan, Dual Canonical Bases and Kazhdan–Lusztig Polynomials, arXiv:math/0509700v2 (Transform. Groups 14 (2009), 535–558)"
      url: "https://arxiv.org/pdf/math/0509700v2"
      locator: "§§4–5, printed pp. 10–18: the upper/lower crystal lattice duality and the triangularity of the monomial expansions in type A."
---

## Statement

Let $M$ be $U^-$ or $V(\lambda)$ with the balanced triple and lower global basis of [[def-lower-global-basis-of-a-quantum-highest-weight-module]], and let $M_A^\vee$, $L_0^\vee$, $L_\infty^\vee$, $G^{\mathrm{up}}$, $\psi^\vee$ and the upper Kashiwara operators be as in [[def-upper-global-basis-by-the-contravariant-form]]. Then, for every finite root or label component:

(i) the restricted graded integral dual $M_A^\vee$ has the actual $A$-basis $\{G^{\mathrm{up}}(b)\}$ dual to $\{G(b)\}$, and $B:(M_A^\vee)_\mu\times(M_A)_\mu\to A$ is perfect; globally the bases form direct sums, which is restricted graded perfectness and not an identification with the full product $\operatorname{Hom}_A(M_A,A)$;

(ii) the dual charts are $L_0^\vee=\bigoplus_bA_0G^{\mathrm{up}}(b)$ and $L_\infty^\vee=\bigoplus_bA_\infty G^{\mathrm{up}}(b)$, and their balanced $\mathbb Z$-intersection is $\bigoplus_b\mathbb ZG^{\mathrm{up}}(b)$, so the dual triple is integrally balanced; at $0$ one has $L_0^\vee=L_0$ and the residue of $G^{\mathrm{up}}(b)$ is $b$, while at infinity its residue is the dual of the lower infinity-chart class in the dual infinity chart;

(iii) the upper bar $\psi^\vee$ fixes each $G^{\mathrm{up}}(b)$;

(iv) the upper operators satisfy the exact mixed adjunctions $B(\tilde f_i^{\mathrm{low}}u,v)=B(u,\tilde e_i^{\mathrm{up}}v)$ and $B(\tilde e_i^{\mathrm{low}}u,v)=B(u,\tilde f_i^{\mathrm{up}}v)$; their reductions at $0$ equal the lower crystal operators and give the same crystal set $\mathcal B$;

(v) for a divided module string $F_i^{(n)}v$ of top rank-one weight $a$, with $d_{a,n}=q_i^{n(a-n)}\binom{a}{n}_i$, the upper operator $\tilde e_i^{\mathrm{up}}$ at position $n\ge1$ multiplies the preceding divided position by $d_{a,n}/d_{a,n-1}=q_i^{a-2n+1}[a-n+1]_i/[n]_i$, and $\tilde f_i^{\mathrm{up}}$ at position $n<a$ multiplies the next by the reciprocal $d_{a,n}/d_{a,n+1}$; for a half string with $e_i'v=0$, with $d_n=q_i^{-n(n-1)/2}/[n]_i!=1/[n]_{q_i^2}!$, the ratios are $1/[n]_{q_i^2}$ and $[n+1]_{q_i^2}$. All admissible ratios are units congruent to $1$ in $A_0$, so unweighted lower adjunction holds modulo $q$ but generally not exactly over $\mathbb Q(q)$. No equality of upper and lower integral bases, even in symmetric type, is implied.

## Facts & Assumptions

**Given:** The lower global bases, charts and balancedness of the integral globalization theorem ([[thm-existence-bar-invariance-and-uniqueness-of-the-lower-global-basis]], [[thm-the-highest-weight-crystal-triple-is-balanced]]); the upper definitions of [[def-upper-global-basis-by-the-contravariant-form]]; the norm and residue theory of [[lem-integral-crystal-residues-of-the-negative-half-represent-the-crystal-basis]] and [[lem-crystal-lattice-polarizations-are-perfect-at-q-zero]]; the bar and duality stability of [[lem-the-lusztig-integral-form-is-stable-under-bar-and-contravariant-duality]].

[F1] Upper definitions ([[def-upper-global-basis-by-the-contravariant-form]]): on each finite component the form $B$ is nondegenerate over $\mathbb Q(q)$, and $G^{\mathrm{up}}(b)$ is the inverse-Gram dual of $G(b)$; $M_A^\vee$, $L_0^\vee$, $L_\infty^\vee$ are restricted direct sums, so only finite-dimensional linear algebra in each component is used.

[F2] Lower basis and charts ([[thm-existence-bar-invariance-and-uniqueness-of-the-lower-global-basis]]): $G(\mathcal B)$ is an $A$-basis of $M_A$, an $A_0$-basis of $L_0$ and an $A_\infty$-basis of $L_\infty$, with balanced intersection $\bigoplus_b\mathbb ZG(b)$; the global extension is a direct sum over finite weight components.

[F3] Norm and pairing data ([[lem-integral-crystal-residues-of-the-negative-half-represent-the-crystal-basis]], [[lem-crystal-lattice-polarizations-are-perfect-at-q-zero]]): $B$ takes values in $A_{\mathbb Z}=\mathbb Z[q,(1-q^{2n})^{-1}]$ on the lower lattice, its residue coefficients are integers, and $B(G(b),G(b'))\equiv\delta_{bb'}\bmod q$ on each finite weight component; after the grand loop the zero chart is perfect: $L_0^\vee=L_0$.

[F4] Divided-string form computation ([[def-contravariant-form-on-an-integrable-quantum-highest-weight-module]], [[lem-the-lusztig-integral-form-is-stable-under-bar-and-contravariant-duality]]): in a divided module string $F_i^{(n)}v$ of top rank-one weight $a$, positions with different top components are orthogonal under $B$, and at equal position the value is $d_{a,n}=q_i^{n(a-n)}\binom{a}{n}_i$ times the norm of the top component; for a half string with $e_i'v=0$ the divided position has squared norm $d_n=q_i^{-n(n-1)/2}/[n]_i!=1/[n]_{q_i^2}!$. All these scalars lie in $A_{\mathbb Z}$ and are units congruent to $1$ in $A_0$ for the positions $0,\dots,a$.

[C1] Choice: declared via [[def-axiom-of-choice]] and used only through the grand loop and perfect-polarization suppliers of [F2] and [F3]; the dual-basis, chart and adjunction computations are choice-free.

## Proof

**Proof technique:** direct.

1.1 **The dual basis on each finite component.** Fix a finite weight component with lower basis $g_b=G(b)$. The Gram matrix $C=(B(g_b,g_c))$ is invertible over $\mathbb Q(q)$ since $B$ is nondegenerate there, and we define $g_b^{\mathrm{up}}$ by $B(g_b,g_c^{\mathrm{up}})=\delta_{bc}$, i.e. $g^{\mathrm{up}}=C^{-1}$ in the dual basis. For arbitrary $x$ in the component, its coordinates in the dual family are exactly $B(g_b,x)$. Hence $x\in M_A^\vee$ if and only if all those coordinates lie in $A$, proving that the $g_b^{\mathrm{up}}$ form an $A$-basis of the restricted dual and that the pairing is perfect on the component; the argument needs only that $C$ is field-invertible, not that $\det C$ is a unit of $A$, and the global statement follows by restricted direct sum. [F1, F2]

1.2 **Exact mixed adjunction.** For the lower shift $u\mapsto\tilde f_i^{\mathrm{low}}u$, extract the finite divided strings: summing over positions, pairs of different top components vanish by [F4], and at equal position the pairing factors into the toral-free scalar $d_{a,n}$ times the top-component pairing. Hence the adjoint of the normalized shift acts on the dual divided positions by the reciprocal ratios $d_{a,n}/d_{a,n+1}$ (respectively $d_{a,n}/d_{a,n-1}$ for the lowering direction), which is precisely $\tilde e_i^{\mathrm{up}}$ on the module string and the displayed half-string ratios on a half string with $e_i'v=0$; this is the mixed adjunction $B(\tilde f_i^{\mathrm{low}}u,v)=B(u,\tilde e_i^{\mathrm{up}}v)$ together with its mirror image. [F1, F4]

2.1 **Dual charts and the balanced dual triple.** The same coordinate criterion, applied over $A_0$ and $A_\infty$, shows $L_0^\vee=\bigoplus_bA_0G^{\mathrm{up}}(b)$ and $L_\infty^\vee=\bigoplus_bA_\infty G^{\mathrm{up}}(b)$; the balanced $\mathbb Z$-intersection of the dual triple is $\bigoplus_b(A\cap A_0\cap A_\infty)G^{\mathrm{up}}(b)=\bigoplus_b\mathbb ZG^{\mathrm{up}}(b)$, and the dual globalization map is the inverse of the same coordinate evaluation. This proves integral balancedness of the dual triple and its chart descriptions. [F1, F2, step 1.1]

2.2 **Residues and the upper bar.** Since $B(g_b,g_c)\equiv\delta_{bc}\bmod q$ by [F3], the inverse-Gram family satisfies $G^{\mathrm{up}}(b)\equiv b$ in the zero chart, and [F3]'s perfection gives $L_0^\vee=L_0$; at infinity the pairing with the lower chart basis defines the residue class of $G^{\mathrm{up}}(b)$ in the genuine dual infinity chart, which is the dual of the lower class and is not asserted to be congruent modulo $q^{-1}$ in $L_\infty$. Because $B(g_b,g_b)=1$ modulo $q$ and the residue pairing is symmetric and orthonormal, the defining relation $B(\psi u,\psi^\vee v)=\overline{B(u,v)}$ gives $\psi^\vee G^{\mathrm{up}}(b)=G^{\mathrm{up}}(b)$: expanding in the dual basis, the left side pairs against $g_c$ as $\overline{B(g_c,G^{\mathrm{up}}(b))}=\delta_{bc}$, the same values as $G^{\mathrm{up}}(b)$ itself. This proves (ii) and (iii). [F1, F2, F3, step 1.1]

2.3 **Positivity and crystal reduction.** With the module scalars $d_{a,n}/d_{a,n-1}=q_i^{a-2n+1}[a-n+1]_i/[n]_i$ for $1\le n\le a$ and the half scalars $1/[n]_{q_i^2}$ and $[n+1]_{q_i^2}$, every admissible ratio is a unit congruent to $1$ in $A_0$; therefore the upper operators preserve the zero chart, reduce modulo $q$ to the same partial-inverse moves on $\mathcal B$, and give the same crystal set $\mathcal B$. Since the ratios are generally not equal to $1$ over $\mathbb Q(q)$, unweighted adjunction holds only modulo $q$, and no upper/lower basis equality follows. [F3, F4, step 1.2]

3.1 **Conclusion.** Step 1.1 and step 2.1 prove the dual basis, perfectness and dual charts; step 2.2 proves the residue statements and upper-bar invariance; steps 1.2 and 2.3 prove the exact mixed adjunctions, unit positivity and crystal compatibility. The Choice use is confined to [C1]. [step 2.1, step 2.2, step 2.3, C1] ∎
