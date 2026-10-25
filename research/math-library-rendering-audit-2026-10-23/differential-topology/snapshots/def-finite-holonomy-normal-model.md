---
id: def-finite-holonomy-normal-model
kind: definition
title: The finite-holonomy normal model of a compact leaf
status: published
origin: pipeline
provenance:
  statement: ai-altered
  proof: not-applicable
deps:
- def-saturated-neighbourhood-of-a-leaf
- lem-finite-holonomy-acts-on-a-small-transverse-disk
- lem-deck-group-of-the-holonomy-cover-is-the-holonomy-group
- def-holonomy-cover-of-a-leaf
- prop-quotient-foliation-under-a-free-proper-foliated-action
- def-local-transversal-to-a-regular-foliation
- prop-products-of-smooth-manifolds-have-a-canonical-product-smooth-structure
- def-group-action
- thm-euclidean-inverse-function-theorem
- thm-chain-rule-for-total-derivatives
- def-countable-choice-principle-for-foliation-pair
justified_by: []
aliases: []
landmark: false
sources:
  scraped: []
  references:
  - title: Ieke Moerdijk and Janez Mrčun, Introduction to Foliations and Lie Groupoids (Cambridge Studies in Advanced
      Mathematics 91, 2003)
    url: https://www.cambridge.org/core/books/introduction-to-foliations-and-lie-groupoids/75BBFED277FF39A56594731202789016
    locator: 'Design locators: §2.3, pp. 30–33 (local Reeb stability and the normal form)'
  - title: Leiden NCG seminar, Noncommutative Geometry of Foliations (2023 seminar notes; complete PDF)
    url: https://ncg-leiden.github.io/foliation2023/foliation_notes.pdf
    locator: §2.1–§2.2, printed pp. 11–15 (the normal model as a quotient by finite holonomy)
  - title: Matias del Hoyo and Rui Loja Fernandes, On deformations of compact foliations (Proc. AMS 147, 2019, 4555–4561)
    url: https://publish.illinois.edu/ruiloja/files/2023/07/compactfoliations.pdf
    locator: §1, PDF p. 1 and §2, PDF pp. 2–3 (compact-Hausdorff foliations and their local linear models; this
      paper is corroboration, not a proof of the general local Reeb theorem)
dependency_level: 8
---

## Definition

Assume $\mathrm{AC}_\omega$
([[def-countable-choice-principle-for-foliation-pair]]). Let $F$ be a regular
foliation, $L$ a compact leaf, $x\in L$, $T$ a local transversal at $x$ that is
an embedded disk ([[def-local-transversal-to-a-regular-foliation]]),
$H=\operatorname{Hol}(L,x)$ a finite holonomy group,
$D\subseteq T$ an $H$-invariant open disk carrying the smooth finite action
supplied by [[lem-finite-holonomy-acts-on-a-small-transverse-disk]], shrunk to
a linearization disk by the construction below, and
$p:\widehat L\to L$ the holonomy cover with
$\operatorname{Deck}(p)\cong H$ acting by the covering-space action of
[[lem-deck-group-of-the-holonomy-cover-is-the-holonomy-group]]
([[def-holonomy-cover-of-a-leaf]]).

In coordinates with $x=0$, write $f_h$ for these action maps and
$A_h=Df_h(0)$. The chain rule gives $A_{gh}=A_gA_h$
([[thm-chain-rule-for-total-derivatives]]). Set
$$k(z)=|H|^{-1}\sum_{h\in H}A_h^{-1}f_h(z).$$
Then $Dk(0)=I$, and reindexing the sum gives $k(f_g(z))=A_gk(z)$.
The inverse function theorem gives a smooth inverse near zero
([[thm-euclidean-inverse-function-theorem]]). Intersect this inverse domain
with its finitely many $H$-translates to keep it invariant and injective.
Average the Euclidean inner product over the $A_h$; a sufficiently small
ball for that inner product lies in the image of this domain and is
$H$-invariant. Its inverse image under $k$ is the required smaller disk $D$.
Thus the action on $D$ is conjugate to its linear derivative action. This is
also the explicit construction in the transverse-disk lemma's Proof,
step 3.1; its Statement alone asserts a smooth action, not a conjugacy.
In transverse dimension zero $D=\{x\}$ and $H$ is trivial.

The **finite-holonomy normal model** of $(L,T,D,H)$ is the quotient
$$\mathcal N:=\bigl(\widehat L\times D\bigr)\big/ H,\qquad h\cdot(\hat y,t):=(h\,\hat y,\,h\,t),$$
with the diagonal $H$-action given by the deck action on $\widehat L$ and the
holonomy action on $D$, together with the foliation $\mathcal F_{\mathcal N}$
obtained from the product foliation of $\widehat L\times D$ by the slices
$\widehat L\times\{t\}$, which the diagonal action permutes. The quotient is a
smooth foliated manifold: the diagonal action is free and a covering-space
action and preserves the product foliation, so
[[prop-quotient-foliation-under-a-free-proper-foliated-action]] applies; the
product carries its canonical product smooth structure
([[prop-products-of-smooth-manifolds-have-a-canonical-product-smooth-structure]]),
and the diagonal formula defines an action of the finite group $H$
([[def-group-action]]).

The **central leaf** of the model is the image of $\widehat L\times\{x\}$; it
is canonically diffeomorphic to $L$, because $\widehat L/H\cong L$ by the
deck-group lemma and $x$ is fixed by the holonomy action. The leaves of
$\mathcal F_{\mathcal N}$ are the images of the slices $\widehat L\times\{t\}$;
a leaf represented by $t$ is $\widehat L/H_t$, where $H_t\le H$ is the stabilizer of $t$. Its holonomy is the germ action of $H_t$: loops lift to paths in $\widehat L$ whose endpoints differ by elements of $H_t$, and every such element occurs by connectedness of $\widehat L$. The derivative action is faithful: if $A_h=I$, the conjugacy gives $h=\mathrm{id}$ as a germ. In the chosen linearized disk a nonidentity linear map cannot be the identity on an open neighborhood of $t$, so this germ action is faithful and the holonomy group is isomorphic to $H_t$. The slice $\widehat L\times\{t\}$ finitely covers its image because $H_t$
is finite. Every leaf of the model other than the central one is therefore
finitely covered by the holonomy cover of $L$, and all leaves of the model are
compact when $L$ is. The model realises $F$ near $L$ in the sense that the
central leaf is $L$ and the local foliation near it is the one induced by the
product foliation of $\widehat L\times D$; the descent to $F$ itself is proved
in the normal-model map lemmas below.
