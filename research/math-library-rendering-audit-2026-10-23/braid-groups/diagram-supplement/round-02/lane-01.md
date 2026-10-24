# Braid Groups diagram supplement — round 02, lane 01

## Scope and evidence

Reviewed the bound snapshot for `thm-pure-braid-forgetting-a-strand-short-exact-sequence`. Its SHA256 matches the current source: `17b49780c91561a9253d88a8fcf64c117a876454f46f64c1ba8f533752da9f50`. Viewed all three listed local screenshots at original resolution: 1200 × 1400, 1200 × 1400, and 1200 × 185. Their hashes match the bound screenshot receipt.

## Decision

**A diagram is warranted as a compact guide to the configuration-space maps and fiber.** A commutative square can show the last-coordinate forgetful maps in the open and closed disk models and the vertical inclusion maps:

\[
\begin{array}{ccc}
F_n(\operatorname{int}D^2) &\xrightarrow{p}& F_{n-1}(\operatorname{int}D^2)\\
\downarrow\iota_n^F && \downarrow\iota_{n-1}^F\\
F_n(D^2) &\xrightarrow{p^D}& F_{n-1}(D^2).
\end{array}
\]

At the basepoints, the top map sends \(q=(q_1,\ldots,q_n)\) to \(q'=(q_1,\ldots,q_{n-1})\). Its fiber over \(q'\) is the punctured open disk \(M_{n-1}=\operatorname{int}D^2\setminus\{q_1,\ldots,q_{n-1}\}\), based at \(q_n\); the fiber inclusion sends \(x\) to \((q_1,\ldots,q_{n-1},x)\). A second labeled row can summarize the induced short exact sequence \(1\to\pi_1(M_{n-1},q_n)\to PB_n\to PB_{n-1}\to1\), identifying the first group with the free group on the stated positive meridians.

The exactness labels must remain tied to the proof: \(\pi_2(F_{n-1}(\operatorname{int}D^2),q')=0\) gives injectivity of the fiber-group map, the fibration exact sequence identifies its image with the kernel of the forgetting map, and connectedness of the fiber gives surjectivity. The inclusion square commutes because both horizontal maps forget the last coordinate; the vertical maps induce the open-to-closed fundamental-group isomorphisms. A picture may show this structure but cannot replace these reasons for exactness.

No braid crossings or endpoint permutation are asserted here. If the punctured fiber is sketched, show only the punctures, basepoint \(q_n\), and the stated positively oriented meridians; do not assign an unstated generator ordering or word convention. Products on the fundamental groups inherit the library's first-then-second convention.

## Rendering observation

The screenshot receipt reports zero TikZ diagrams and zero diagram failures. The three original-resolution tiles show the statement and complete proof; no existing diagram is malformed. The recommendation is pedagogical, based on the concrete maps and fiber in the source, and does not identify a mathematical or rendering defect by itself.
