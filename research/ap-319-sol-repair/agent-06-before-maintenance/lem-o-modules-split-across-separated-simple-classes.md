---
id: "lem-o-modules-split-across-separated-simple-classes"
kind: "lemma"
title: "Splitting finite-length modules across separated simple classes"
deps: ["thm-every-category-o-object-has-finite-length", "thm-jordan-holder-theorem-in-an-abelian-category", "thm-category-o-is-abelian-and-extension-closed"]
verification:
  audited: 2026-09-07
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-07
sources:
  references:
    - title: "§1.13 p.31, formal decomposition paragraph"
      url: "https://www.nzdr.ru/data/media/biblio/kolxoz/M/MA/MAr/Humphreys%20J.E.%20Representations%20of%20Semisimple%20Lie%20Algebras%20in%20the%20BGG%20Category%20O%20(AMS,%202008)(ISBN%200821846787)(O)(303s)_MAr_.pdf"
provenance:
  statement: "literature-derived"
  proof: "ai-generated"
status: published
origin: "pipeline"
proof_strategy: "Induct on kernel length via quotient pushouts, then quotient length via pullbacks and retractions; construct part summands by retractions and prove uniqueness by Hom vanishing"
---

## Statement

Fix a finite-dimensional complex semisimple Lie algebra $\mathfrak g$, a Cartan subalgebra $\mathfrak h$, and a positive Borel $\mathfrak b=\mathfrak h\oplus\mathfrak n^+$. Write $Q^+=\sum_i\mathbb Z_{\geq0}\alpha_i$, $\mu\leq\lambda$ when $\lambda-\mu\in Q^+$, and $w\cdot\lambda=w(\lambda+\rho)-\rho$.

Partition the isomorphism classes of simple objects of $\mathcal O$ into parts $\mathcal P_t$. Suppose every extension of two simples from different parts splits, in either order. Then each $M\in\mathcal O$ has a unique decomposition $M=\bigoplus_tM_t$ into submodules whose composition factors lie in $\mathcal P_t$, with finitely many nonzero terms. This decomposition is functorial, and maps between modules supported on disjoint collections of parts are zero.

## Facts & Assumptions

**Given:** The setting above and the hypotheses in the statement.

[F1] Fix a finite-dimensional complex semisimple Lie algebra $\mathfrak g$, a Cartan subalgebra $\mathfrak h$, and a positive Borel $\mathfrak b=\mathfrak h\oplus\mathfrak n^+$. Write $Q^+=\sum_i\mathbb Z_{\geq0}\alpha_i$, $\mu\leq\lambda$ when $\lambda-\mu\in Q^+$, and $w\cdot\lambda=w(\lambda+\rho)-\rho$. Every object of $\mathcal O$ has a finite composition series and is both Noetherian and Artinian. The length of zero is zero. ([[thm-every-category-o-object-has-finite-length]])

[F2] If an object $A$ in an abelian category has two composition series, then the two series have the same length and the same composition factors up to permutation and isomorphism. ([[thm-jordan-holder-theorem-in-an-abelian-category]])

[F3] Fix a finite-dimensional complex semisimple Lie algebra $\mathfrak g$, a Cartan subalgebra $\mathfrak h$, and a positive Borel $\mathfrak b=\mathfrak h\oplus\mathfrak n^+$. Write $Q^+=\sum_i\mathbb Z_{\geq0}\alpha_i$, $\mu\leq\lambda$ when $\lambda-\mu\in Q^+$, and $w\cdot\lambda=w(\lambda+\rho)-\rho$. The category $\mathcal O$ is closed under submodules, quotients and finite direct sums and is an abelian category. If $0\to A\to E\to B\to0$ is exact, $A,B\in\mathcal O$, and $E$ is $\mathfrak h$-semisimple, then $E\in\mathcal O$. The middle-term weight hypothesis is essential. ([[thm-category-o-is-abelian-and-extension-closed]])

## Proof

1.1 Finite length and Jordan–Hölder make the set of composition factors of every object intrinsic. In any exact sequence the multiset of factors of the middle object is the union of those of the ends: concatenate a series in the subobject with the inverse images of a series in the quotient and use Jordan–Hölder. Thus a nonzero image of a map between objects with disjoint collections of parts would have a simple factor in both collections. Such maps are zero. [F1, F2, F3]

2.1 First fix a simple $T$ in one collection of parts and an object $A$ supported in disjoint parts. We prove every extension $0\to A\to E\to T\to0$ splits by induction on the length of $A$. For $A=0$ this is immediate, and for $A$ simple it is the hypothesis. Otherwise choose a maximal proper submodule $A_0$ so $S=A/A_0$ is simple. The quotient $E/A_0$ is the pushout along $A\to S$, explicitly $(E\oplus S)/\{(a,-\bar a):a\in A\}$. The extension of $T$ by $S$ splits by hypothesis. The inverse image in $E$ of a chosen section image is an extension of $T$ by $A_0$; induction splits it, supplying a section into $E$. [given, algebra, step 1.1]

3.1 For general $B$ in parts disjoint from those of $A$, induct on its length in $0\to A\to E\xrightarrow{p}B\to0$. The case $B=0$ is immediate and a simple $B$ was just handled. Choose a maximal submodule $B_0\subset B$, with simple quotient $T$. The pullback is $\{(e,b)\in E\oplus B_0:p(e)=b\}$, equivalently $p^{-1}(B_0)$. Induction splits it, giving a copy $\widetilde B_0\subset E$ disjoint from $A$. Now $0\to A\to E/\widetilde B_0\to T\to0$ splits by the preceding step. Its retraction onto $A$, composed with $E\to E/\widetilde B_0$, is a retraction of $E$ onto $A$. Its kernel is a complementary copy of $B$, proving the required splitting for all lengths. [algebra, step 2.1]

4.1 Construct the decomposition by induction on the length of $M$, with the empty decomposition for zero. Choose a maximal proper submodule $N$ and write its already constructed decomposition as $N=N_t\oplus N_{\mathrm{out}}$, where the simple quotient $M/N$ belongs to part $t$. The extension $0\to N_{\mathrm{out}}\to M/N_t\to M/N\to0$ splits by the preceding argument. Compose its retraction onto $N_{\mathrm{out}}$ with $M\to M/N_t$. The resulting retraction gives $M=N_{\mathrm{out}}\oplus K$, where $0\to N_t\to K\to M/N\to0$. All factors of $K$ lie in part $t$. This constructs finitely many summands. [F1, algebra, step 3.1]

5.1 For two such decompositions, the composite of the inclusion of a part-$t$ summand with projection onto any part-$u$ summand for $u\ne t$ vanishes by the first step. Therefore that part-$t$ submodule is contained in the other part-$t$ submodule, and reversing the decompositions gives equality. The same argument for any map proves preservation of parts and functoriality. [algebra, step 4.1] ∎

## Notes

The source leaves the formal finite-length decomposition to the reader. The local proof supplies the pushout, pullback, retraction and uniqueness arguments explicitly; its proof provenance is therefore ai-generated rather than literature-derived or a claimed transcription.
