---
id: lem-cft-defect-sewing-bimodule-trace-pairing
kind: lemma
title: "Bimodule averaging and the restricted pivotal trace pairing"
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
dependency_level: 1
domain: mathematics
library: mathematics
deps:
  - def-cft-mtc-symmetric-special-frobenius-defect-data
  - lem-simple-ribbon-fusion-dimensions-are-nonzero
  - thm-basic-properties-of-the-categorical-trace
dependency_roles:
  def-cft-mtc-symmetric-special-frobenius-defect-data: mathematical-premise
  lem-simple-ribbon-fusion-dimensions-are-nonzero: mathematical-premise
  thm-basic-properties-of-the-categorical-trace: mathematical-premise
justified_by: []
forward_refs: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Fjelstad, Fuchs, Runkel and Schweigert, TFT Construction of RCFT Correlators V, arXiv:hep-th/0503194v2"
      url: "https://arxiv.org/pdf/hep-th/0503194v2"
      locator: "Appendix C.3, especially (C.16), and Appendix D.1: symmetric-special Frobenius averaging and restriction of the trace pairing."
    - title: "Fjelstad, Fuchs and Stigner, RCFT with Defects: Factorization and Fundamental World Sheets, arXiv:1202.3929v2"
      url: "https://arxiv.org/pdf/1202.3929v2"
      locator: "Section 2.4, (2.38)–(2.40): bimodule trace pairing; ordinary trace-dual bases are used here without multiplying their contraction by an object's dimension."
verification:
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-11-05
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
---

## Statement

Let $A,B$ be symmetric special Frobenius algebras in the complex modular ribbon fusion category of the defect-data definition, and let $M,N$ be arbitrary $A$-$B$-bimodules. Set $e_A=\Delta_A\eta_A$ and $e_B=\Delta_B\eta_B$, and suppress canonical associators and unitors. On $\operatorname{Hom}_{\mathcal C}(M,N)$ define
$$ L_{M,N}(f)=\rho_N^\ell(\operatorname{id}_A\otimes f)(\operatorname{id}_A\otimes\rho_M^\ell)(e_A\otimes\operatorname{id}_M), $$
$$ R_{M,N}(f)=\rho_N^r(f\otimes\operatorname{id}_B)(\rho_M^r\otimes\operatorname{id}_B)(\operatorname{id}_M\otimes e_B). $$
These are commuting idempotents with images the left- and right-module morphisms, respectively. Their product $E_{M,N}=LR$ projects onto $\operatorname{Hom}_{A|B}(M,N)$ and satisfies
$$ \operatorname{tr}_j(gE_{M,N}(f))=\operatorname{tr}_j(E_{N,M}(g)f)\qquad(f:M\to N,\ g:N\to M). $$
The resulting trace pairing on $\operatorname{Hom}_{A|B}(M,N)\times\operatorname{Hom}_{A|B}(N,M)$ is nondegenerate. Ordinary trace-dual bases with contraction $\delta_{ab}$ exist even when $d_M$ or $d_N$ is zero. For $A=B$, let $X$ be an $A$-$A$-bimodule with the left and right actions of the defect-data definition, and let $U,V$ be objects with fixed right and left dualities. The bending map
$$ T(\beta)=(\operatorname{id}_U\otimes\beta\otimes\operatorname{id}_V)(b_U\otimes\operatorname{id}_X\otimes\widetilde b_V) $$
is an isomorphism from $\operatorname{Hom}_{A|A}(U^\vee\otimes^+X\otimes^-V^\vee,A)$ onto $\operatorname{Hom}_{A|A}(X,U\otimes^+A\otimes^-V)$. Its inverse is
$$ T^{-1}(h)=(\operatorname{ev}_U\otimes\operatorname{id}_A\otimes\widetilde{\operatorname{ev}}_V)(\operatorname{id}_{U^\vee}\otimes h\otimes\operatorname{id}_{V^\vee}). $$
Here $b_U:\mathbf1\to U\otimes U^\vee$, $\operatorname{ev}_U:U^\vee\otimes U\to\mathbf1$, $\widetilde b_V:\mathbf1\to V^\vee\otimes V$ and $\widetilde{\operatorname{ev}}_V:V\otimes V^\vee\to\mathbf1$ are the specified dualities. Consequently $(\alpha,\beta)\mapsto\operatorname{tr}_j(\alpha T(\beta))$ is a nondegenerate algebraic pairing between the two corresponding defect-field spaces. No simple-label dimension factor is included in this bending convention. This lemma does not identify an RT two-point coefficient or a normalized gluing cap with this algebraic pairing.

## Statement references

[[def-cft-mtc-symmetric-special-frobenius-defect-data]]

[[lem-simple-ribbon-fusion-dimensions-are-nonzero]]

## Facts & Assumptions

**Given:** The algebras, bimodules, action maps, pivotal trace and averages in the Statement.

[F1] [[def-cft-mtc-symmetric-special-frobenius-defect-data]] gives the Frobenius, symmetry, unit, counit and specialness equations and the fixed pivotal dualities. In particular $\beta_A=\epsilon_A m_A:A\otimes A\to\mathbf1$ is the Frobenius pairing and $e_A=\Delta_A\eta_A$ its copairing; likewise for $B$.

[F2] [[lem-simple-ribbon-fusion-dimensions-are-nonzero]] gives $d_i\ne0$ for each simple $U_i$. Finite semisimplicity decomposes ordinary Hom spaces into finite simple matrix blocks, on which the pivotal trace is $d_i$ times matrix trace.

[F3] [[thm-basic-properties-of-the-categorical-trace]] gives cyclicity of the left trace: for $f:U\to V$ and $h:V\to U^{\vee\vee}$, $\operatorname{Tr}_{L,U}(hf)=\operatorname{Tr}_{L,V}(f^{\vee\vee}h)$. Naturality of the pivotal map $j$ yields $\operatorname{tr}_{j,U}(vu)=\operatorname{tr}_{j,V}(uv)$ for $u:U\to V$ and $v:V\to U$.

## Proof

1.1 The Frobenius and unit equations give $(m_A\otimes\operatorname{id}_A)(\operatorname{id}_A\otimes e_A)=\Delta_A=(\operatorname{id}_A\otimes m_A)(e_A\otimes\operatorname{id}_A)$, and specialness gives $m_Ae_A=\eta_A$. Substitution of $e_A=\Delta_A\eta_A$ and $\beta_A=\epsilon_A m_A:A\otimes A\to\mathbf1$ also gives the two inverse-pairing identities $(\operatorname{id}_A\otimes\beta_A)(e_A\otimes\operatorname{id}_A)=\operatorname{id}_A=(\beta_A\otimes\operatorname{id}_A)(\operatorname{id}_A\otimes e_A)$, using Frobenius followed by the unit and counit. All these equations hold for $B$ as well. [given, F1, algebra]

1.2 The two displayed bending maps are inverse on ordinary Hom spaces by the right-duality snake for $U$ and the left-duality snake for $V$. They preserve the required bimodule equations. To verify this without a drawing, for any object $W$ use the hexagon and naturality with $b_U$ to obtain $$ (c_{W,U}\otimes\operatorname{id}_{U^\vee})(\operatorname{id}_W\otimes b_U)=(\operatorname{id}_U\otimes c_{W,U^\vee}^{-1})(b_U\otimes\operatorname{id}_W). $$ The equation with $\widetilde b_V$ and the inverse braiding is obtained in the same way. Set $W=A$, substitute these equations into $T(\beta)\rho_X^\ell$ and $T(\beta)\rho_X^r$, respectively, and then use the left- and right-intertwining equations for $\beta$. The results are exactly $\rho^{U,A,V}_\ell(\operatorname{id}_A\otimes T(\beta))$ and $\rho^{U,A,V}_r(T(\beta)\otimes\operatorname{id}_A)$ with the plus/minus actions in [F1]. The evaluation versions of the same two naturality equations prove that $T^{-1}$ preserves the intertwining equations as well. Thus these are inverse isomorphisms of the indicated bimodule Hom spaces, without rescaling the dualities. [F1, algebra]

2.1 Define the pivotal cyclic rotation on $t:\mathbf1\to A\otimes A$ by $\operatorname{rot}_A(t)=(\operatorname{ev}_A\otimes\operatorname{id}_A\otimes\operatorname{id}_A)(\operatorname{id}_{A^\vee}\otimes t\otimes\operatorname{id}_A)\widetilde b_A$, where $\widetilde b_A:\mathbf1\to A^\vee\otimes A$ is the chosen coevaluation. The equality $\Phi_\ell=\Phi_r$ of the two transposes of $\beta_A$ gives $\operatorname{rot}_A(e_A)=e_A$. One way to check this directly is to transpose the two inverse-pairing identities of step 1.1: their transposes say that the two resulting maps $A^\vee\to A$ are inverses of $\Phi_\ell$ and $\Phi_r$. These maps are respectively $(\operatorname{ev}_A\otimes\operatorname{id}_A)(\operatorname{id}_{A^\vee}\otimes e_A)$ and $(\operatorname{id}_A\otimes\widetilde{\operatorname{ev}}_A)(e_A\otimes\operatorname{id}_{A^\vee})$. Their equality, bent back using $\widetilde b_A$, is exactly $\operatorname{rot}_A(e_A)=e_A$. This uses pivotal cyclic rotation, not a braided flip of $e_A$. The identical argument applies to $e_B$. [F1, step 1.1, algebra]

2.2 Centrality in step 1.1 and module associativity imply that $L(f)$ is left-linear. Written in formal separability slots, the required equality is $a e_A^{(1)}f(e_A^{(2)}x)=e_A^{(1)}f(e_A^{(2)}a x)$; it abbreviates the two composites on $A\otimes M$, with the superscripts denoting the output slots of the single morphism $e_A$, not elements of an object. If $f$ is already left-linear, its action relation and $m_Ae_A=\eta_A$ give $L(f)=f$. Thus $L$ is the projector onto left-module morphisms. The same argument on the right gives the assertion for $R$. Expanding the two averages, the left and right actions on each module commute and the inserted copairings occupy disjoint left and right tensor slots. This gives $LR=RL$. The image of $E=LR$ is consequently the intersection of the two images, namely the bimodule morphisms. [given, F1, step 1.1, algebra]

3.1 For arbitrary $t:\mathbf1\to A\otimes A$, maps $a_M:A\otimes M\to M$, $a_N:A\otimes N\to N$, $f:M\to N$ and $g:N\to M$, the pivotal contraction identity is $$ \operatorname{tr}_j\!\left(g a_N(\operatorname{id}_A\otimes f)(\operatorname{id}_A\otimes a_M)(t\otimes\operatorname{id}_M)\right)=\operatorname{tr}_j\!\left(a_M(\operatorname{id}_A\otimes g)(\operatorname{id}_A\otimes a_N)(\operatorname{rot}_A(t)\otimes\operatorname{id}_N)f\right). $$ Indeed expand each trace as its coevaluation, endomorphism and pivotal evaluation composite. Substitute the formula for $\operatorname{rot}_A(t)$ on the right and cancel the consecutive $A^\vee,A$ evaluation/coevaluation by their snake. Changing the remaining trace cut from $N$ to $M$ is the cyclicity supplied by [F3]; the remaining ordered tensor slots and maps are those of the left expression. Apply this identity to the two left actions and $t=e_A$, and then use step 2.1. It gives $\operatorname{tr}_j(gL_{M,N}(f))=\operatorname{tr}_j(L_{N,M}(g)f)$. The right-action identity is obtained by the same expansion with the two $B$ slots on the right. Composing the two adjointness identities and using commutation from step 2.2 proves the identity for $E$. [F1, F2, F3, step 2.1, step 2.2, algebra]

4.1 The ordinary trace pairing between $\operatorname{Hom}_{\mathcal C}(M,N)$ and $\operatorname{Hom}_{\mathcal C}(N,M)$ is nondegenerate: decompose $M,N$ into simples, and detect a nonzero matrix entry with the opposite matrix unit, whose product has trace $d_i\ne0$. If a nonzero $f$ is a bimodule morphism, choose an ordinary $g$ detecting it. Since $E(f)=f$, step 3.1 gives $\operatorname{tr}_j(E(g)f)=\operatorname{tr}_j(gf)\ne0$, with $E(g)$ a bimodule morphism. The same reasoning on the other side proves nondegeneracy of the restricted pairing. Finite-dimensional dual-basis linear algebra gives the ordinary trace-dual bases. The zero-space case is vacuous, and no total object dimension has been divided by. [F2, step 2.2, step 3.1, algebra]

5.1 Apply step 4.1 to the two bimodules $U\otimes^+A\otimes^-V$ and $X$. Its nondegenerate pairing is $\operatorname{tr}_j(\alpha h)$ with $h:X\to U\otimes^+A\otimes^-V$. Transporting its second argument through the isomorphism $T$ of step 1.2 proves nondegeneracy of $\operatorname{tr}_j(\alpha T(\beta))$. This establishes the stated algebraic defect-field pairing, including zero spaces, without an RT coefficient identification or division by a total dimension. [step 4.1, step 1.2, algebra] ∎
