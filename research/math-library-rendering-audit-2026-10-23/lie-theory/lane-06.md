# Lie Theory visual audit — lane 06

## Scope and coverage

Reviewed all 107 assigned items against their frozen source snapshots and local HTML previews. Opened every one of the 169 assigned PNG tiles individually at original resolution. The coverage ledger records item IDs, section coverage, source and HTML SHA-256 values, exact screenshot paths, and screenshot SHA-256 values: [lane-06.json](lane-06.json).

## Findings

- **Confirmed — literal-ascii-math-in-title:** `ex-root-systems-a-two-b-two-and-g-two`, frozen source line 4. Its H1 displays `A_2, B_2 and G_2` with literal underscores. Evidence: [tile 01](screenshots/ex-root-systems-a-two-b-two-and-g-two--01.png).
- **Confirmed — raw-math-in-technique-banner:** `ex-projective-covers-in-the-regular-sl2-block`, frozen source line 109. The uppercase technique banner is intended, but the inline `$n\ge0$` is rendered literally. Evidence: [tile 02](screenshots/ex-projective-covers-in-the-regular-sl2-block--02.png).

## Diagram candidates

These are uncertain/editorial candidates, not confirmed rendering failures.

- **Missing root-system diagram:** `ex-root-systems-a-two-b-two-and-g-two`, frozen source lines 25–29, 43–47. The example describes planar configurations for A2, B2, and G2 without a drawn figure. A three-panel candidate could show A2's six unit roots and simple roots α=u0, β=u2; B2's eight vectors ±e1, ±e2, ±e1±e2 with α=e1−e2, β=e2 and root lengths distinguished; and G2's explicit twelve vectors ±α, ±β, ±(α+β), ±(α+2β), ±(α+3β), ±(2α+3β), with α, β and positive roots marked. Check the 6/8/12 counts, reflection symmetry, and Cartan products 1/2/3. Evidence: [tile 01](screenshots/ex-root-systems-a-two-b-two-and-g-two--01.png).
- **Missing module-structure diagram:** `ex-projective-covers-in-the-regular-sl2-block`, frozen source lines 70–73 and 79–81. A Loewy diagram could show P(0)=Δ(0)=L(0), and P(−2) with head/top L(−2), middle L(0), and socle/bottom L(−2); annotate the nonsplit inclusion Δ(0)→P(−2) and quotient Δ(−2)=L(−2). Clarify that these are composition layers, not a direct-sum decomposition. Evidence: [tiles 01–03](screenshots/ex-projective-covers-in-the-regular-sl2-block--01.png).

## Review notes

KaTeX math in the displayed bodies was legible. No standalone imagery, Scratch content, clipping, reference-title leak, or existing drawn diagram was observed in the assigned previews. Block-rendered links and ordinary punctuation wrapping were treated as intended behavior. The uppercase technique banners are intended; only raw math inside one was reported. Findings describe the frozen local previews and make no claim about a production route.
