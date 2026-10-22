<!-- new lines at canonical 16 -->
  proof: literature-derived

<!-- new lines at canonical 47 -->
[F2] The unlink vertex groups and all marked/unmarked saddle maps are identified, in simultaneous state bases, as the reduced Frobenius TQFT ([[lem-os-unlink-resolution-covers-and-floer-tqft]]).

<!-- new lines at canonical 51 -->
[F4] **External input — local surgery/mirror smoothing identification.** Ozsváth–Szabó, arXiv:math/0309170v1, Section2 Proposition2.1 and following paragraph, pp.6–7, together with Figure1 p.2 and Theorem6.3 pp.34–35, identifies the three branched fillings with crossing/0/1 resolutions and the immediate surgery edge with the saddle. In its displayed chart the over-strand is northwest–southeast, the 0-resolution joins the left pair and the right pair, and the 1-resolution joins the top pair and bottom pair. After switching over/under to form the mirror, this is exactly A then B in the library source chart. Thus the surgery bits agree with the mirror Khovanov 0/1 bits. Only the fixed-diagram mod-two assertion is imported.


<!-- new lines at canonical 55 -->
1.1 On the associated graded cube the diagonal differential is the ordinary vertex differential. Therefore its homology is the direct sum of the resolution Floer groups. The next differential is induced by the components changing one coordinate: higher polygon components lower the increasing filtration by at least two and cannot contribute to this first differential. Each surviving component is the actual surgery triangle map of that edge. [F1, given, algebra]

<!-- new lines at canonical 57 -->
1.2 Use the SAME vertex state identification simultaneously for all incident edges. By the exact Floer supplier [F2], an unmarked merge has table $1\otimes1\mapsto1$, $1\otimes X,X\otimes1\mapsto X$, $X\otimes X\mapsto0$; an unmarked split has $1\mapsto1\otimes X+X\otimes1$ and $X\mapsto X\otimes X$. Marked merge kills the input with the other circle labelled $X$ and sends its $1$ input to $1_{\rm marked}$. Marked split sends $1_{\rm marked}$ to $1_{\rm marked}\otimes X_{\rm new}$, with the tensor order determined by which child contains the point. These last two formulas are obtained by quotienting the marked factor, not by keeping an extra unreduced factor. Tensor the identity on every untouched circle. These are exactly the reduced Frobenius saddle maps of [F3]. [F2, F3, step 1.1, algebra]

<!-- new lines at canonical 59 -->
1.3 For an explicit grading binding, let $n_+(D),n_-(D)$ be the signed crossing counts. By [F4] the surgery bit vector $I$ is the $0/1$ vector of $\overline D$, so the normalized cochain degrees are

<!-- new lines at canonical 61 -->
where $a_c\in\{1,X\}$, with degrees $1,-1$, and the marked surviving label has reduced degree zero. Every saddle table in step 1.2 lowers the sum of label degrees by one, including marked merge and split. Increasing $|I|$ by one therefore raises $i$ by one and preserves $\widetilde j$. The spectral-sequence filtration index $p=n-|I|$ satisfies $i=n_-(D)-p$; it is not an independent Floer cochain grading. [F3, F4, step 1.2, algebra]

<!-- new lines at canonical 63 -->
2.1 The finite direct sum of the simultaneously compatible vertex identifications in [F2] is consequently an isomorphism with the normalized reduced Khovanov cube of the mirror. The actual surgery-to-mirror chart correspondence is [F4]; the grading shifts follow independently from the library cochain definition in step1.3, rather than from an unconverted homological index in the source. No arbitrary separate edgewise changes of basis are used. This proves the direct-sum first-differential assertion for the fixed diagram, without a diagram-independence claim. [F1, F2, F3, F4, step 1.1, step 1.2, step 1.3] ∎

