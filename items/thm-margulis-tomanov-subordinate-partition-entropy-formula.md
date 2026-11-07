---
id: thm-margulis-tomanov-subordinate-partition-entropy-formula
kind: theorem
title: "Margulis–Tomanov subordinate-partition entropy formula"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 2
deps: [def-lindenstrauss-t-space, thm-lindenstrauss-leafwise-conditional-measures-for-t-spaces, def-lindenstrauss-recurrence-along-t-leaves]
justified_by: []
provenance:
  statement: ai-altered
  proof: not-supplied
sources:
  scraped: []
  references:
    - title: "G. A. Margulis and G. Tomanov, Invariant measures for actions of unipotent groups over local fields on homogeneous spaces"
      url: "https://gdz.sub.uni-goettingen.de/download/pdf/PPN356556735_0116/LOG_0029.pdf"
      locator: "§9.3, Proposition and proof, printed pp. 381–383; public official full text recovered, local proof remains unsupplied."
    - title: "Elon Lindenstrauss, Invariant Measures and Arithmetic Quantum Unique Ergodicity"
      url: "https://math.huji.ac.il/~elon/Publications/quantum.pdf"
      locator: "Theorem 1.1, Theorem 1.4, §§3, 7–8, and Appendix A."
---

## Statement

Let $X=\Gamma\backslash(\mathrm{SL}_2(\mathbb R)\times L)/K$ be in the characteristic-zero S-algebraic homogeneous setting of Lindenstrauss, with $L$ a finite product of real, complex and $p$-adic algebraic groups, $K\le L$ compact and $\Gamma$ discrete with finite intersection with $L$. Put $a(t)=\operatorname{diag}(e^{-t},e^t)$, acting by right translation, and let $\nu$ be an $a(1)$-invariant ergodic probability. There is a countably generated Borel sigma-algebra $\mathcal A$ subordinate to $N^+$: almost every atom is contained in a bounded $N^+$-leaf interval and contains a neighborhood of its point in that leaf. Define $a\mathcal A$ by transporting each atom by right multiplication by $a=a(1)$. Then $[x]_{\mathcal A}\subseteq[x]_{a\mathcal A}$ almost everywhere, and
\[
h_\nu(a)=H_\nu(\mathcal A\mid a\mathcal A)=-\int\log\left(\frac{\nu_{x,N^+}([x]_{\mathcal A})}{\nu_{x,N^+}([x]_{a\mathcal A})}\right)\,d\nu(x).
\]
The ratio is the conditional probability of the smaller atom in the larger atom; leafwise measures in numerator and denominator use the same chart and normalization.

## Statement references

[G. A. Margulis and G. Tomanov, Invariant measures for actions of unipotent groups over local fields on homogeneous spaces, §9.3, Proposition and proof, printed pp. 381–383; public official full text recovered, local proof remains unsupplied.](https://gdz.sub.uni-goettingen.de/download/pdf/PPN356556735_0116/LOG_0029.pdf)

[Elon Lindenstrauss, Invariant Measures and Arithmetic Quantum Unique Ergodicity, Theorem 1.1, Theorem 1.4, §§3, 7–8, and Appendix A.](https://math.huji.ac.il/~elon/Publications/quantum.pdf)

## Facts & Assumptions

**Given:** The complete objects, parameters, conventions and hypotheses in the Statement.

[L1] Lindenstrauss §7.6 uses the subordinate-partition and entropy theorem. The original publisher URL was inaccessible; the official GDZ article has now been recovered. [G. A. Margulis and G. Tomanov, Invariant measures for actions of unipotent groups over local fields on homogeneous spaces, §9.3, Proposition and proof, printed pp. 381–383; public official full text recovered, local proof remains unsupplied.](https://gdz.sub.uni-goettingen.de/download/pdf/PPN356556735_0116/LOG_0029.pdf)

[L2] Official public MT94 full text was recovered from GDZ; the actual subordinate-partition proposition is §9.3, printed pp. 381–383, whereas §9.2 is a small-mesh finite-entropy lemma. Lindenstrauss printed p. 201 cites “Proposition 9.2” and its second expression in (7.13) reverses the mass ratio; the first conditional-probability expression fixes the orientation. The local proof of the subordinate partition and entropy equality remains unsupplied; recovery and reading of these passages are not a reconstruction.
