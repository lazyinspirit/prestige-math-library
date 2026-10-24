# Lane 04 — configuration braid short exact sequence

**Item:** `thm-configuration-braid-pure-braid-short-exact-sequence`  
**Assessment:** Useful optional supplement; no confirmed defect from missing art alone.

I read the bound source snapshot and opened all four listed local PNG screenshots at original resolution. The snapshot SHA-256 matches both the current item and the assignment binding. The screenshot receipt and all four image hashes match the local files.

The displayed order is correct:

\[
1\longrightarrow PB_n\mathrel{\mathop{\longrightarrow}^{p_*}}B_n^{\mathrm{conf}}\mathrel{\mathop{\longrightarrow}^{\pi}}S_n\longrightarrow1.
\]

The directions are supported by the source: (p_*) is induced by the ordered-to-unordered quotient (p:F_n(D^2)\to C_n(D^2)), from π₁ at (q) to π₁ at ([q]); endpoint monodromy π sends a configuration-loop class to the permutation σ for which the lift starting at (q) ends at σ·q. The proof establishes injectivity of (p_*), equality ​\(\operatorname{im}p_*=\ker\pi\), and surjectivity of π. In particular, identity monodromy is exactly the condition that the lift closes at (q). Surjectivity follows from realizing adjacent transpositions and their generation of (S_n).

For (n=0,1), the source treats both configuration spaces as one-point spaces and (S_n) as trivial, so the sequence is exact in those cases too. Its first-then-second loop product and endpoint permutation convention are retained. It asserts no splitting and does not identify these groups with an Artin presentation or strand diagrams.

A compact explanatory schematic could usefully show the covering-induced map on fundamental groups, label π as endpoint monodromy, and annotate injectivity, image=kernel, and surjectivity. The exact-sequence formula itself is already explicit; therefore the missing illustration is a supplement opportunity rather than a confirmed mathematical or rendering defect.
