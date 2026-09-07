---
id: "ex-a-generic-sl2-block-is-semisimple"
kind: "example"
title: "Nonintegral sl2 central characters split into two simple blocks"
deps: ["thm-central-character-summands-split-into-linkage-blocks", "lem-verma-self-extensions-in-category-o-split", "prop-hom-spaces-in-category-o-are-finite-dimensional", "cor-verma-irreducibility-criterion-from-shapovalov-determinants", "def-generalized-central-character-subcategory-of-o", "thm-simple-objects-of-category-o-are-highest-weight-modules", "lem-harish-chandra-projection-computes-highest-weight-scalars", "cor-central-characters-are-dot-weyl-orbits", "thm-every-category-o-object-has-finite-length"]
verification:
  audited: 2026-09-07
sources:
  references:
    - title: "§15.1 Example 15.8, p.81"
      url: "https://ocw.mit.edu/courses/18-757-representations-of-lie-groups-fall-2023/mit18_757_f23_lec_full.pdf"
provenance:
  statement: "literature-derived"
  proof: "ai-altered"
status: published
origin: "pipeline"
proof_strategy: "direct"
---

## Example

Fix a finite-dimensional complex semisimple Lie algebra $\mathfrak g$, a Cartan subalgebra $\mathfrak h$, and a positive Borel $\mathfrak b=\mathfrak h\oplus\mathfrak n^+$. Write $Q^+=\sum_i\mathbb Z_{\geq0}\alpha_i$, $\mu\leq\lambda$ when $\lambda-\mu\in Q^+$, and $w\cdot\lambda=w(\lambda+\rho)-\rho$.

For $\mathfrak g=\mathfrak{sl}_2$ and $\lambda\in\mathbb C\setminus\mathbb Z$, $\mathcal O_{\chi_\lambda}$ has exactly two distinct singleton linkage blocks, with labels $\lambda$ and $-\lambda-2$. Each block is equivalent to finite-dimensional complex vector spaces. In particular the central-character summand is semisimple but is not one indecomposable block.

## Facts & Assumptions

**Given:** The setting above and the hypotheses in the example.

[F1] Fix a finite-dimensional complex semisimple Lie algebra $\mathfrak g$, a Cartan subalgebra $\mathfrak h$, and a positive Borel $\mathfrak b=\mathfrak h\oplus\mathfrak n^+$. Write $Q^+=\sum_i\mathbb Z_{\geq0}\alpha_i$, $\mu\leq\lambda$ when $\lambda-\mu\in Q^+$, and $w\cdot\lambda=w(\lambda+\rho)-\rho$. For a linkage class $C=W_\lambda\cdot\lambda$, let $\mathcal O_C$ be the full subcategory of objects all of whose simple composition factors have labels in $C$. Then $\mathcal O=\bigoplus_C\mathcal O_C$, and each nonzero $\mathcal O_C$ is indecomposable as a categorical direct summand. These are precisely the blocks. Each $\mathcal O_C$ lies in $\mathcal O_{\chi_\lambda}$; a central-character summand can contain several blocks. Independently, grouping weights by cosets of the root lattice $Q$ gives a canonical coarser decomposition by weight cosets. ([[thm-central-character-summands-split-into-linkage-blocks]])

[F2] Fix a finite-dimensional complex semisimple Lie algebra $\mathfrak g$, a Cartan subalgebra $\mathfrak h$, and a positive Borel $\mathfrak b=\mathfrak h\oplus\mathfrak n^+$. Write $Q^+=\sum_i\mathbb Z_{\geq0}\alpha_i$, $\mu\leq\lambda$ when $\lambda-\mu\in Q^+$, and $w\cdot\lambda=w(\lambda+\rho)-\rho$. Every short exact sequence $0\to M(\lambda)\to E\xrightarrow{p}M(\lambda)\to0$ in $\mathcal O$ splits. ([[lem-verma-self-extensions-in-category-o-split]])

[F3] Fix a finite-dimensional complex semisimple Lie algebra $\mathfrak g$, a Cartan subalgebra $\mathfrak h$, and a positive Borel $\mathfrak b=\mathfrak h\oplus\mathfrak n^+$. Write $Q^+=\sum_i\mathbb Z_{\geq0}\alpha_i$, $\mu\leq\lambda$ when $\lambda-\mu\in Q^+$, and $w\cdot\lambda=w(\lambda+\rho)-\rho$. For $M,N\in\mathcal O$, $\operatorname{Hom}_{\mathcal O}(M,N)$ is finite dimensional. For every weight $\lambda$, $\operatorname{End}_{\mathcal O}(L(\lambda))=\mathbb C\operatorname{id}$. ([[prop-hom-spaces-in-category-o-are-finite-dimensional]])

[F4] $M(\lambda)$ is simple if and only if $\langle\lambda+\rho,\alpha^\vee\rangle\notin\mathbb Z_{>0}$ for every $\alpha\in\Phi^+$. ([[cor-verma-irreducibility-criterion-from-shapovalov-determinants]])

[F5] Let $Z=Z(U(\mathfrak g))$, let $\chi:Z\to\mathbb C$ be a unital complex-algebra character, and put $\mathfrak m_\chi=\ker\chi$. For $M\in\mathcal O$, the generalized central-character submodule is $M_\chi=\{v\in M:\mathfrak m_\chi^Nv=0\text{ for some }N\geq1\}$, and $\mathcal O_\chi$ consists of the objects with $M=M_\chi$. ([[def-generalized-central-character-subcategory-of-o]])

[F6] The simple objects of $\mathcal O$ are exactly the modules $L(\mu)$, $\mu\in\mathfrak h^*$, and $L(\mu)\cong L(\nu)$ if and only if $\mu=\nu$. ([[thm-simple-objects-of-category-o-are-highest-weight-modules]])

[F7] If a cyclic highest-weight module has highest weight $\mu$, then every $z\in Z(U(\mathfrak g))$ acts on it by the scalar $\operatorname{pr}(z)(\mu)=\chi_\mu(z)$. ([[lem-harish-chandra-projection-computes-highest-weight-scalars]])

[F8] The highest-weight central characters satisfy $\chi_\mu=\chi_\lambda$ if and only if $\mu\in W\cdot\lambda$. ([[cor-central-characters-are-dot-weyl-orbits]])

[F9] Every object of $\mathcal O$ has a finite composition series and is both Noetherian and Artinian. The length of zero is zero. ([[thm-every-category-o-object-has-finite-length]])

## Verification

1.1 For $\mathfrak{sl}_2$, the dot orbit of $\lambda$ is exactly $\{\lambda,-\lambda-2\}$. Its two labels are nonintegral and distinct: equality would imply $\lambda=-1$. By F8 they have the same central character. Conversely, if a simple object belongs to $\mathcal O_{\chi_\lambda}$, F6 writes it as $L(\mu)$. Its highest vector is killed by a power of every $z-\chi_\lambda(z)$ by F5, while F7 says that $z$ acts on it as $\chi_\mu(z)$. Hence $\chi_\mu=\chi_\lambda$, and F8 forces $\mu\in\{\lambda,-\lambda-2\}$. Neither label has an integral root pairing, so each integral-reflection group is trivial. Both Vermas are simple by F4, and F1 therefore identifies exactly the two asserted singleton blocks. [F1, F4, F5, F6, F7, F8]

2.1 Fix one label $\eta$ and put $S=M(\eta)=L(\eta)$. Every object in this block has a finite composition series by F9, and all its factors are $S$ by F1. Every extension of $S$ by itself splits by F2. More generally an extension $0\to S^r\to E\to S\to0$ splits: push out along each coordinate projection $S^r\to S$, obtaining $E_i=(E\oplus S)/\{(a,-a_i):a\in S^r\}$. Each has a retraction to its kernel $S$. Composing these retractions with $E\to E_i$ and collecting coordinates gives a retraction $E\to S^r$, hence a splitting. The case $r=0$ is immediate. [F1, F2, F9, algebra, step 1.1]

3.1 Induction on a composition series now expresses every object as a finite direct sum of $S$. Since $\operatorname{End}(S)=\mathbb C$, maps between $S^r$ and $S^s$ are exactly complex matrices. Thus $V\mapsto S\otimes V$ (with trivial action on the finite-dimensional multiplicity space) and $X\mapsto\operatorname{Hom}(S,X)$ are inverse equivalences. Zero corresponds to the zero-dimensional vector space. [F3, algebra, step 2.1] ∎
