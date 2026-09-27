---
page: homological-gaussian-elimination-examples
title: "Homological Gaussian Elimination — Examples"
status: draft
items: []
examples: [ex-a-two-by-two-unit-pivot-fixes-the-minus-schur-sign, ex-neighbouring-differentials-after-a-gaussian-basis-change, ex-two-finite-cancellation-orders-and-their-composite-retracts, cex-a-nonunit-differential-entry-cannot-be-gaussian-cancelled, cex-gaussian-reduction-is-not-strictly-natural-for-arbitrary-chain-maps]
---

These examples compute the algebra of the page and mark the boundaries of its
hypotheses. The first two take the rank-one matrix
$\begin{pmatrix}1&1\\ 1&1\end{pmatrix}$ and cancel its lower-right identity: the
Schur complement must be $a-b\varphi^{-1}c$, since the minus sign gives the
reduced differential $0$ with one-dimensional kernel and cokernel matching those
of the original differential, while a plus sign would produce multiplication by
$2$ and erase both homology objects. The second of them records the basis
changes $L,R$ explicitly and shows that the transformed neighbouring arrows
$(1;0)$ and $(1,0)$ leave the reduced segment
$k\xrightarrow{1}k\xrightarrow{0}k\xrightarrow{1}k$.

The third example works in the Clark–Morrison–Walker Lemma A.2 shape
$A\to B\oplus C\to D_1\oplus D_2\oplus E\to F\oplus G\to H$ with adjacent
invertible entries $\psi$ and $\varphi$: cancelling them in either order leaves
the same complex $A\to C\to D_2\to F\to H$ with middle arrows
$\gamma-x\psi^{-1}\beta$ and $\mu-\lambda\varphi^{-1}\nu$, and the composite
retract data of the finite-iteration formula in each order. The two
counterexamples then delimit the hypotheses: the two-term complex
$0\to\mathbb Z\xrightarrow{2}\mathbb Z\to0$ has a noninvertible differential
entry, so it cannot be cancelled — its homology $\mathbb Z/2$ in the upper
degree would be erased and the complex is not contractible — and transfer along
a chosen retract is only functorial up to homotopy, since off-diagonal maps
between the two identical contractible summands in the displayed example
transfer to zero individually but their composite transfers to the identity.
