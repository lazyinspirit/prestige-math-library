---
id: "ex-a-generic-sl2-block-is-semisimple"
kind: "example"
title: "Nonintegral sl2 central characters split into two simple blocks"
deps: ["def-axiom-of-choice", "def-bgg-category-o", "def-integral-weyl-group-of-a-weight", "lem-verma-self-extensions-in-category-o-split", "prop-hom-spaces-in-category-o-are-finite-dimensional", "ex-sl2-verma-action-in-the-pbw-basis", "def-generalized-central-character-subcategory-of-o", "thm-simple-objects-of-category-o-are-highest-weight-modules", "lem-harish-chandra-projection-computes-highest-weight-scalars", "cor-central-characters-are-dot-weyl-orbits", "thm-every-category-o-object-has-finite-length", "thm-category-o-decomposes-by-generalized-central-character"]
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

Assume the Axiom of Choice ([[def-axiom-of-choice]]).

Fix a finite-dimensional complex semisimple Lie algebra $\mathfrak g$, a Cartan subalgebra $\mathfrak h$, and a positive Borel $\mathfrak b=\mathfrak h\oplus\mathfrak n^+$. Write $Q^+=\sum_i\mathbb Z_{\geq0}\alpha_i$, $\mu\leq\lambda$ when $\lambda-\mu\in Q^+$, and $w\cdot\lambda=w(\lambda+\rho)-\rho$.

For $\mathfrak g=\mathfrak{sl}_2$ and $\lambda\in\mathbb C\setminus\mathbb Z$, $\mathcal O_{\chi_\lambda}$ has exactly two distinct singleton linkage blocks, with labels $\lambda$ and $-\lambda-2$. Each block is equivalent to finite-dimensional complex vector spaces. In particular the central-character summand is semisimple but is not one indecomposable block.

## Facts & Assumptions

**Given:** The Axiom of Choice, the setting above, and the hypotheses in the example.

[F1] Every object of $\mathcal O$ is a direct sum of weight spaces, is finitely generated, and is stable under root operators, which shift weights by elements of the root lattice $Q$ ([[def-bgg-category-o]]).

[F2] Fix a finite-dimensional complex semisimple Lie algebra $\mathfrak g$, a Cartan subalgebra $\mathfrak h$, and a positive Borel $\mathfrak b=\mathfrak h\oplus\mathfrak n^+$. Write $Q^+=\sum_i\mathbb Z_{\geq0}\alpha_i$, $\mu\leq\lambda$ when $\lambda-\mu\in Q^+$, and $w\cdot\lambda=w(\lambda+\rho)-\rho$. Every short exact sequence $0\to M(\lambda)\to E\xrightarrow{p}M(\lambda)\to0$ in $\mathcal O$ splits. ([[lem-verma-self-extensions-in-category-o-split]])

[F3] Fix a finite-dimensional complex semisimple Lie algebra $\mathfrak g$, a Cartan subalgebra $\mathfrak h$, and a positive Borel $\mathfrak b=\mathfrak h\oplus\mathfrak n^+$. Write $Q^+=\sum_i\mathbb Z_{\geq0}\alpha_i$, $\mu\leq\lambda$ when $\lambda-\mu\in Q^+$, and $w\cdot\lambda=w(\lambda+\rho)-\rho$. For $M,N\in\mathcal O$, $\operatorname{Hom}_{\mathcal O}(M,N)$ is finite dimensional. For every weight $\lambda$, $\operatorname{End}_{\mathcal O}(L(\lambda))=\mathbb C\operatorname{id}$. ([[prop-hom-spaces-in-category-o-are-finite-dimensional]])

[F4] For $\mathfrak{sl}_2$, the vectors $f^rv_\eta$ ($r\geq0$) form a PBW basis of $M(\eta)$, have pairwise distinct $h$-weights $\eta-2r$, and satisfy $e f^rv_\eta=r(\eta-r+1)f^{r-1}v_\eta$ for $r\geq1$ ([[ex-sl2-verma-action-in-the-pbw-basis]]).

[F5] Let $Z=Z(U(\mathfrak g))$, let $\chi:Z\to\mathbb C$ be a unital complex-algebra character, and put $\mathfrak m_\chi=\ker\chi$. For $M\in\mathcal O$, the generalized central-character submodule is $M_\chi=\{v\in M:\mathfrak m_\chi^Nv=0\text{ for some }N\geq1\}$, and $\mathcal O_\chi$ consists of the objects with $M=M_\chi$. ([[def-generalized-central-character-subcategory-of-o]])

[F6] The simple objects of $\mathcal O$ are exactly the modules $L(\mu)$, $\mu\in\mathfrak h^*$, and $L(\mu)\cong L(\nu)$ if and only if $\mu=\nu$. ([[thm-simple-objects-of-category-o-are-highest-weight-modules]])

[F7] If a cyclic highest-weight module has highest weight $\mu$, then every $z\in Z(U(\mathfrak g))$ acts on it by the scalar $\operatorname{pr}(z)(\mu)=\chi_\mu(z)$. ([[lem-harish-chandra-projection-computes-highest-weight-scalars]])

[F8] Under the given Choice premise, the highest-weight central characters satisfy $\chi_\mu=\chi_\lambda$ if and only if $\mu\in W\cdot\lambda$. ([[cor-central-characters-are-dot-weyl-orbits]])

[F9] Under the given Choice premise, every object of $\mathcal O$ has a finite composition series and is both Noetherian and Artinian. The length of zero is zero. ([[thm-every-category-o-object-has-finite-length]])

[F10] The central-character subcategories $\mathcal O_\chi$ are categorical direct summands of $\mathcal O$, with exact projections ([[thm-category-o-decomposes-by-generalized-central-character]]).

## Verification

1.1 For $\mathfrak{sl}_2$, the dot orbit of $\lambda$ is exactly $\{\lambda,-\lambda-2\}$. Its two labels are nonintegral and distinct: equality would imply $\lambda=-1$. By F8 they have the same central character. Conversely, if a simple object belongs to $\mathcal O_{\chi_\lambda}$, F6 writes it as $L(\mu)$. Its highest vector is killed by a power of every $z-\chi_\lambda(z)$ by F5, while F7 says that $z$ acts on it as $\chi_\mu(z)$. Hence $\chi_\mu=\chi_\lambda$, and F8 forces $\mu\in\{\lambda,-\lambda-2\}$. To see that both Vermas are simple, fix either nonintegral label $\eta$. Every nonzero submodule of $M(\eta)$ contains a nonzero weight vector: project a finite sum of distinct weight components using a polynomial in $h$. Choose its least occurring PBW index $r$. If $r>0$, F4 makes $e f^rv_\eta=r(\eta-r+1)f^{r-1}v_\eta\ne0$, contradicting minimality; hence $r=0$ and the submodule contains $v_\eta$, so it equals $M(\eta)$. The shifted simple-root pairings of the two labels are $\lambda+1$ and $-(\lambda+1)$, both nonintegral. Hence their integral-reflection linkage classes are singletons by [[def-integral-weyl-group-of-a-weight]]. [F4, F5, F6, F7, F8]

2.1 The two labels lie in distinct root-lattice cosets: their difference is $2(\lambda+1)$ in $h$-weight coordinates, whereas the $\mathfrak{sl}_2$ root lattice has even integral coordinates; $\lambda+1\notin\mathbb Z$. For each $X\in\mathcal O_{\chi_\lambda}$, group its weight spaces by every coset of $Q$. Root operators preserve each group, so F1 makes these groups submodules whose direct sum is $X$. Any nonzero group has a simple composition factor by F9. Step 1.1 allows only the two labels, whose simple modules have weights in their respective cosets, so all other groups vanish. Hence $X=X_{\lambda+Q}\oplus X_{-\lambda-2+Q}$ functorially, and every nonzero summand has factors only of its corresponding label. Both summands are nonzero because they contain their simple Verma modules. [F1, F9, step 1.1, algebra]

3.1 Fix one label $\eta$ and put $S=M(\eta)=L(\eta)$. Every object in its coset summand has a finite composition series by F9, and all its factors are $S$ by step 2.1. Every extension of $S$ by itself splits by F2. More generally an extension $0\to S^r\to E\to S\to0$ splits: push out along each coordinate projection $S^r\to S$, obtaining $E_i=(E\oplus S)/\{(a,-a_i):a\in S^r\}$. Each has a retraction to its kernel $S$. Composing these retractions with $E\to E_i$ and collecting coordinates gives a retraction $E\to S^r$, hence a splitting. The case $r=0$ is immediate. [F2, F9, algebra, step 1.1, step 2.1]

4.1 Induction on a composition series now expresses every object in either coset summand as a finite direct sum of its sole simple $S$. Since $\operatorname{End}(S)=\mathbb C$, maps between $S^r$ and $S^s$ are exactly complex matrices. Thus $V\mapsto S\otimes V$ (with trivial action on the finite-dimensional multiplicity space) and $X\mapsto\operatorname{Hom}(S,X)$ are inverse equivalences for each summand. Zero corresponds to the zero-dimensional vector space. Each summand is indecomposable as a category because every nonzero object contains its sole simple $S$ and all objects are sums of $S$. By F10, $\mathcal O_{\chi_\lambda}$ itself is a direct summand of $\mathcal O$, so these are precisely its two blocks in $\mathcal O$. [F3, F10, algebra, step 2.1, step 3.1] ∎
