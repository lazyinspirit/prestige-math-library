---
id: thm-lusztig-canonical-and-kashiwara-global-bases-agree-in-symmetric-type
kind: theorem
title: "Lusztig's canonical basis and Kashiwara's lower global basis agree in symmetric finite ADE type"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-lower-global-basis-of-a-quantum-highest-weight-module, lem-crystal-lattice-polarizations-are-perfect-at-q-zero, lem-finite-support-regularization-of-quantum-label-weight-modules, lem-integral-crystal-residues-of-the-negative-half-represent-the-crystal-basis, lem-lusztig-and-kashiwara-normalizations-match-by-root-color, lem-string-ideal-triples-are-balanced, thm-existence-bar-invariance-and-uniqueness-of-the-lower-global-basis, thm-global-basis-projection-from-the-negative-half-to-a-highest-weight-module, thm-the-highest-weight-crystal-triple-is-balanced, thm-the-negative-half-bilinear-form-is-symmetric-nondegenerate-and-integral]
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
      locator: "§0, printed p. 466 (PDF p. 2): 'In the case of $A_n$, $D_n$ and $E_n$, this coincides with the canonical base of Lusztig'; Corollary 6.1.2 and the conjecture $B(\\infty)^*=B(\\infty)$ following it, with Lusztig's proofs in $A_n,D_n,E_n$."
    - title: "George Lusztig, Introduction to Quantum Groups (Progress in Mathematics 110, Birkhauser, 1993; second printing 1994; author-hosted scan)"
      url: "https://math.mit.edu/~gyuri/papers/quant.gr.pdf"
      locator: "§14.2.3–14.2.4, printed pp.118–119 (PDF127–128): signed norm characterization/definition; §14.3.2, printed pp.120–121 (PDF129–130): exact Ti,n quotient transition; §14.4.2–14.4.6, printed pp.122–123 (PDF131–132): positive recursion; §14.4.11–14.4.12, printed p.124 (PDF133): highest-module based quotient; §1.2/§3.1 supply the exact v=q^-1 form/presentation dictionary."
    - title: "Jonathan Brundan, Dual Canonical Bases and Kazhdan–Lusztig Polynomials, arXiv:math/0509700v2 (Transform. Groups 14 (2009), 535–558)"
      url: "https://arxiv.org/pdf/math/0509700v2"
      locator: "§3–§5, printed pp. 7–18: the type-A dictionary between the canonical basis, the dual canonical basis and Kashiwara's lower and upper global crystal bases, with the relevant normalizations."
---

## Statement

Assume symmetric finite ADE type, so $d_i=1$ for all $i$. Transport Lusztig's parameter by $v=q^{-1}$, the abstract half generators by $\theta_i^{(n)}\mapsto F_i^{(n)}$, and the full torus by $K_h^{L}\mapsto K_{-h}$, as in [[lem-lusztig-and-kashiwara-normalizations-match-by-root-color]]. Under this exact dictionary the divided-power integral forms and the bar involutions agree, and the half forms agree through the root-color factor $B_L=C_\nu B_K$, not by an unqualified identity. Then Lusztig's canonical lower basis equals the Kashiwara lower global basis of $U^-$, and Lusztig's canonical highest-module quotient bases equal the corresponding lower global bases of [[def-lower-global-basis-of-a-quantum-highest-weight-module]] for every dominant label $\lambda$ in the explicit regular realization. The signed canonical set equals $\pm G_\infty$, and the positive canonical choice is matched by its actual $T_{i,n}$ top-string recursion. No equality of upper and lower bases, and no unitriangular word-basis characterization, is asserted.

## Facts & Assumptions

**Given:** The parameter, coproduct and form dictionary of [[lem-lusztig-and-kashiwara-normalizations-match-by-root-color]] with $B_L=C_\nu B_K$, $C_\nu=\prod_i(1-q_i^2)^{-\nu_i}$; the lower global bases and their norm description ([[thm-existence-bar-invariance-and-uniqueness-of-the-lower-global-basis]], [[lem-integral-crystal-residues-of-the-negative-half-represent-the-crystal-basis]], [[lem-crystal-lattice-polarizations-are-perfect-at-q-zero]]); the adapted string ideals and the exact top-string transition ([[thm-the-highest-weight-crystal-triple-is-balanced]]); the based quotient ([[thm-global-basis-projection-from-the-negative-half-to-a-highest-weight-module]]); the auxiliary regular datum ([[lem-finite-support-regularization-of-quantum-label-weight-modules]]).

[F1] Dictionary ([[lem-lusztig-and-kashiwara-normalizations-match-by-root-color]]): the semilinear source-to-library isomorphism $\varphi$ carries source relations, coproduct $\Delta_L$ and divided powers to the library presentation with $\varphi(\theta_i^{(n)})=F_i^{(n)}$ and $\varphi(K_h^{L})=K_{-h}$; on homogeneous degree $\nu$, $B_L=C_\nu B_K$ with $C_\nu$ a unit of the form $\prod_i(1-q_i^2)^{-\nu_i}\equiv1\bmod q$, and $\pm1$ sign conventions are fixed by the generator values.

[F2] Norm and integral criteria ([[lem-crystal-lattice-polarizations-are-perfect-at-q-zero]], [[lem-integral-crystal-residues-of-the-negative-half-represent-the-crystal-basis]]): $\mathcal L(\infty)=\{u\in U_q^-:B_K(u,u)\in A_0\}$ (maximality), the pairing takes values on $L_{\mathbb Z}=U_A^-\cap\mathcal L(\infty)$ in $A_{\mathbb Z}=\mathbb Z[q,(1-q^{2n})^{-1}:n\ge1]$, and its residue pairing is $\mathbb Z$-valued with orthonormal crystal classes in $\mathcal B(\infty)$, and the norm-$1$ elements of $L_{\mathbb Z}/qL_{\mathbb Z}$ are exactly $\mathcal B(\infty)\cup(-\mathcal B(\infty))$; the balanced intersection is $\bigoplus_b\mathbb ZG_\infty(b)$ with $B_K(G_\infty(b),G_\infty(b'))\equiv\delta_{bb'}$ modulo $q$.

[F3] String partition and top-string transition ([[thm-the-highest-weight-crystal-triple-is-balanced]], [[lem-string-ideal-triples-are-balanced]]): the adapted bases of the string ideals $I_{(i,n)}^A$ partition $G_\infty(\mathcal B(\infty))$ by exact string position, and for $\tilde e_ib=0$ one has $G_\infty(\tilde f_i^nb)-F_i^{(n)}G_\infty(b)\in I_{(i,n+1)}^A$, an exact congruence modulo the strictly higher string ideal with coefficient $1$.

[F4] Based quotient of the half ([[thm-global-basis-projection-from-the-negative-half-to-a-highest-weight-module]]): $\pi_\lambda$ is a based quotient; $G_\infty(b)$ maps to $0$ precisely for the killed crystal classes and otherwise to $G_\lambda(\pi_\lambda(b))$, bijectively onto the integral highest-module basis.

[F5] Auxiliary transport ([[lem-finite-support-regularization-of-quantum-label-weight-modules]]): the source $Y$-regularity hypotheses are discharged in the explicit primitive-coroot regular datum, and characters and labels are transported back to the original lattice; the highest weight eigenvalue $v^{\langle h,\lambda\rangle}=q^{-\langle h,\lambda\rangle}$ agrees with the action of $K_{-h}$.

## Proof

**Proof technique:** direct.

1.1 **Form and norm transport.** For $x\in U_A^-[-\nu]$ one has $B_L(x,x)=C_\nu B_K(x,x)$ by [F1], with $C_\nu$ and $C_\nu^{-1}=\prod_i(1-q_i^2)^{\nu_i}$ in $1+q\mathbb Z[\![q]\!]$. Hence $B_L(x,x)\in1+q\mathbb Z[\![q]\!]$ if and only if $B_K(x,x)\in1+q\mathbb Z[\![q]\!]$; since a rational function with a power-series expansion has no pole at zero, the signed norm condition $B_L(x,x)\in1+q\mathbb Z[\![q]\!]$ implies $B_K(x,x)\in A_0$. [F1]

1.2 **The signed set contains $\pm G_\infty$.** Each $G_\infty(b)$ is integral and bar fixed by [F2]; its $B_K$-norm belongs to $A_{\mathbb Z}$ and is $1$ modulo $q$, so $B_L(G_\infty(b),G_\infty(b))=C_\nu B_K(G_\infty(b),G_\infty(b))\in1+q\mathbb Z[\![q]\!]$. Thus both signs of every lower global vector satisfy the source signed norm condition. [F1, F2]

2.1 **Conversely, the signed set is contained in $\pm G_\infty$.** Let $x\in U_A^-$ be bar fixed with $B_L(x,x)\in1+q\mathbb Z[\![q]\!]$, and write its finite homogeneous decomposition $x=\sum_\nu x_\nu$. For each nonzero $x_\nu$ choose its zero-chart order $t_\nu\in\mathbb Z$, so $y_\nu=q^{-t_\nu}x_\nu\in\mathcal L(\infty)_{-\nu}\setminus q\mathcal L(\infty)_{-\nu}$. By [F2], $B_K(y_\nu,y_\nu)$ is a unit of $A_0$ with positive rational residue. Since every $C_\nu$ has constant term $1$, the terms $C_\nu q^{2t_\nu}B_K(y_\nu,y_\nu)$ of $B_L(x,x)$ with least order have positive leading coefficients and cannot cancel. Regularity therefore forces every $t_\nu\ge0$, so $x\in\mathcal L(\infty)$. Bar fixedness puts $x\in\psi(\mathcal L(\infty))$, hence $x\in E_{\mathbb Z}=\bigoplus_b\mathbb ZG_\infty(b)$, say $x=\sum_ba_bG_\infty(b)$ with integers $a_b$ and finite support. Homogeneity gives $B_L(x,x)=\sum_\nu C_\nu\sum_{b,c\in\mathcal B(\infty)_{-\nu}}a_ba_cB_K(G_\infty(b),G_\infty(c))$, whose residue is $\sum_ba_b^2$ by [F2]. This equals $1$, so exactly one $a_b$ is $\pm1$ and the rest vanish; thus $x=\pm G_\infty(b)$. Together with step 1.2 this proves equality of the full signed sets. [F1, F2, step 1.1, step 1.2, algebra]

3.1 **String partition and $T_{i,n}$ transition.** The source defines $B_{i,n}$ by the left string ideals; write $T_{i,n}$ for its transported map $\pi_{i;n}$, which selects the unique signed element of exact string position $n$ whose difference from $F_i^{(n)}$ times a lower position is an integral combination of strictly higher string positions. The adapted global bases of [F3] identify that partition with the crystal $\varepsilon_i$-partition of $\mathcal B(\infty)$, and the exact top-string transition of [F3] gives $T_{i,n}(G_\infty(b))=G_\infty(\tilde f_i^nb)$ whenever $\tilde e_ib=0$, with sign $+1$ fixed by the coefficient-$1$ quotient relation. [F3, step 2.1]

4.1 **The positive canonical recursion.** The source constructs its positive canonical basis from $1$ by the transitions $T_{i,n}$; the Kashiwara crystal satisfies the same recursion because every positive-height class $b$ has some $\varepsilon_i(b)=n>0$ with $\tilde e_i^nb$ of strictly smaller height and $b=\tilde f_i^n(\tilde e_i^nb)$. Induction on height using step 3.1 therefore identifies the positive canonical basis with $G_\infty(\mathcal B(\infty))$, removing the sign ambiguity of step 2.1 by the actual recursion and not merely by the almost-orthonormal norms. [step 2.1, step 3.1]

5.1 **Highest-module quotient bases.** The source defines its highest-module canonical basis by the based quotient of the half, omitting precisely the killed right-string-ideal elements; [F4] gives exactly the same zero-or-survive formula on $G_\infty$, and [F5] matches the highest eigenvalue $v^{\langle h,\lambda\rangle}=q^{-\langle h,\lambda\rangle}$ with the action of $K_{-h}$ and discharges the regularity hypotheses. Hence the quotient canonical bases coincide with the lower global bases $G_\lambda$ for every dominant label $\lambda$. [F4, F5, step 4.1]

6.1 **Conclusion.** Steps 1.1–2.1 prove the signed-set equality $\{\pm G_\infty\}$; steps 3.1–4.1 prove the positive basis identification by the actual top-string recursion; step 5.1 proves the highest-module quotient identification under the exact transport dictionary. No upper basis and no unitriangular word characterization was used. [step 2.1, step 4.1, step 5.1] ∎
