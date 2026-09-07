---
id: "cor-restricted-duality-preserves-linkage-blocks"
kind: "corollary"
title: "Duality preserves linkage blocks and block orthogonality"
deps: ["thm-central-character-summands-split-into-linkage-blocks", "prop-restricted-duality-is-an-exact-involution-on-category-o", "def-chevalley-contravariant-form"]
verification:
  audited: 2026-09-07
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-07
sources:
  references:
    - title: "Humphreys, §4.9 Exercise, p.84"
      url: "https://www.nzdr.ru/data/media/biblio/kolxoz/M/MA/MAr/Humphreys%20J.E.%20Representations%20of%20Semisimple%20Lie%20Algebras%20in%20the%20BGG%20Category%20O%20(AMS,%202008)(ISBN%200821846787)(O)(303s)_MAr_.pdf"
    - title: "Chen, Lecture 8 §3 Corollary 3.11, p.5"
      url: "https://windshower.github.io/linchen/teaching/s2024/lecture8.pdf"
provenance:
  statement: "literature-derived"
  proof: "ai-altered"
status: published
origin: "pipeline"
proof_strategy: "Duality preserves simple factors. A contravariant form induces a module map to the restricted dual because different weights are orthogonal. Hom between distinct block parts vanishes"
---

## Statement

Fix a finite-dimensional complex semisimple Lie algebra $\mathfrak g$, a Cartan subalgebra $\mathfrak h$, and a positive Borel $\mathfrak b=\mathfrak h\oplus\mathfrak n^+$. Write $Q^+=\sum_i\mathbb Z_{\geq0}\alpha_i$, $\mu\leq\lambda$ when $\lambda-\mu\in Q^+$, and $w\cdot\lambda=w(\lambda+\rho)-\rho$.

Restricted duality preserves every linkage block. If $B$ is a Chevalley-contravariant bilinear form on $M\in\mathcal O$, then $B(M_C,M_{C^{\prime}})=0$ for distinct block summands $C\ne C'$. No nondegeneracy of $B$ is required.

## Facts & Assumptions

**Given:** The setting above and the hypotheses in the statement.

[F1] Fix a finite-dimensional complex semisimple Lie algebra $\mathfrak g$, a Cartan subalgebra $\mathfrak h$, and a positive Borel $\mathfrak b=\mathfrak h\oplus\mathfrak n^+$. Write $Q^+=\sum_i\mathbb Z_{\geq0}\alpha_i$, $\mu\leq\lambda$ when $\lambda-\mu\in Q^+$, and $w\cdot\lambda=w(\lambda+\rho)-\rho$. For a linkage class $C=W_\lambda\cdot\lambda$, let $\mathcal O_C$ be the full subcategory of objects all of whose simple composition factors have labels in $C$. Then $\mathcal O=\bigoplus_C\mathcal O_C$, and each nonzero $\mathcal O_C$ is indecomposable as a categorical direct summand. These are precisely the blocks. Each $\mathcal O_C$ lies in $\mathcal O_{\chi_\lambda}$; a central-character summand can contain several blocks. Independently, grouping weights by cosets of the root lattice $Q$ gives a canonical coarser decomposition by weight cosets. ([[thm-central-character-summands-split-into-linkage-blocks]])

[F2] Fix a finite-dimensional complex semisimple Lie algebra $\mathfrak g$, a Cartan subalgebra $\mathfrak h$, and a positive Borel $\mathfrak b=\mathfrak h\oplus\mathfrak n^+$. Write $Q^+=\sum_i\mathbb Z_{\geq0}\alpha_i$, $\mu\leq\lambda$ when $\lambda-\mu\in Q^+$, and $w\cdot\lambda=w(\lambda+\rho)-\rho$. Restricted Chevalley duality is an exact contravariant equivalence $D:\mathcal O\to\mathcal O^{\mathrm{op}}$, with a natural isomorphism $D^2\cong\operatorname{id}$. It preserves each weight-space dimension, the formal character, and every simple composition multiplicity. ([[prop-restricted-duality-is-an-exact-involution-on-category-o]])

[F3] Fix simple roots $\{\alpha_i\}$ in the chosen positive system and normalized Chevalley generators $e_i\in\mathfrak g_{\alpha_i}$, $f_i\in\mathfrak g_{-\alpha_i}$. Let $\tau:U(\mathfrak g)\to U(\mathfrak g)$ be the Chevalley anti-involution determined by $\tau(e_i)=f_i$, $\tau(f_i)=e_i$, and $\tau(h)=h$ for $h\in\mathfrak h$. A bilinear form $B$ on a $\mathfrak g$-module is **Chevalley-contravariant** when $$B(xu,v)=B(u,\tau(x)v)\qquad(x\in U(\mathfrak g)).$$ This is a bilinear condition, not a Hermitian or positivity condition. ([[def-chevalley-contravariant-form]])

## Proof

1.1 Duality preserves each simple composition multiplicity. Hence the list of factor labels of a dualized block object remains in the same class; the block characterization gives $D(\mathcal O_C)=\mathcal O_C$. [F1, F2]

2.1 For weight vectors $u\in M_\mu$ and $v\in M_\nu$, contravariance and $\tau(h)=h$ give $(\mu(h)-\nu(h))B(u,v)=0$ for all $h$. If $\mu\ne\nu$ choose $h$ separating them, and obtain $B(u,v)=0$. Each $u$ has only finitely many weight components, so $v\mapsto B(u,v)$ belongs to the restricted dual. The assignment $u\mapsto B(u,-)$ is $\mathfrak g$-linear by the defining contravariance identity. [F3, algebra, step 1.1]

3.1 Restrict this map to $M_C$ and project to $D(M_{C^{\prime}})$. Its source and target are in different blocks by the first step, so it is zero by the block decomposition. This says exactly $B(M_C,M_{C^{\prime}})=0$, including zero summands and the zero form. [F1, F2, step 2.1] ∎
