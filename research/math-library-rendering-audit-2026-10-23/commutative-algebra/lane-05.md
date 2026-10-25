# Commutative Algebra rendering audit — lane 05

Reviewed 82 assigned items and all 99 screenshot tiles at original resolution. All source hashes match the assignment. Per-item source and per-tile hashes/dimensions are recorded in lane-05.json.

Confirmed rendering findings: 7. No raw TikZ source or missing domain diagram was identified. Wikilink reference expansion is treated as intentional per the run direction.

## def-depth-with-respect-to-an-ideal

- Section: Definition
- Source lines: 25, 27
- Kind: Leading text clipped
- Symptom: The standalone original-resolution preview omits the opening letters/text of the first body paragraph at its left edge although the frozen source contains them; subsequent text in the same paragraph is visible.
- Screenshot: screenshots/def-depth-with-respect-to-an-ideal--01.png
- Suggested repair: Repair the first-inline-run positioning/clipping in the rendered ItemBody and recapture the preview.

## def-fractional-ideal

- Section: Definition
- Source lines: 33, 35
- Kind: Leading text clipped
- Symptom: The standalone original-resolution preview omits the opening letters/text of the first body paragraph at its left edge although the frozen source contains them; subsequent text in the same paragraph is visible.
- Screenshot: screenshots/def-fractional-ideal--01.png
- Suggested repair: Repair the first-inline-run positioning/clipping in the rendered ItemBody and recapture the preview.

## def-koszul-regular-and-h-one-regular-sequences

- Section: Definition
- Source lines: 24, 26
- Kind: Leading text clipped
- Symptom: The standalone original-resolution preview omits the opening letters/text of the first body paragraph at its left edge although the frozen source contains them; subsequent text in the same paragraph is visible.
- Screenshot: screenshots/def-koszul-regular-and-h-one-regular-sequences--01.png
- Suggested repair: Repair the first-inline-run positioning/clipping in the rendered ItemBody and recapture the preview.

## ex-dedekind-localisation-is-dvr

- Section: Example
- Source lines: 34, 36
- Kind: Leading text clipped
- Symptom: The standalone original-resolution preview omits the opening letters/text of the first body paragraph at its left edge although the frozen source contains them; subsequent text in the same paragraph is visible.
- Screenshot: screenshots/ex-dedekind-localisation-is-dvr--01.png
- Suggested repair: Repair the first-inline-run positioning/clipping in the rendered ItemBody and recapture the preview.

## ex-primes-in-a-prime-localisation

- Section: Example
- Source lines: 36
- Kind: Leading text clipped
- Symptom: The standalone original-resolution preview omits the opening letters/text of the first body paragraph at its left edge although the frozen source contains them; subsequent text in the same paragraph is visible.
- Screenshot: screenshots/ex-primes-in-a-prime-localisation--01.png
- Suggested repair: Repair the first-inline-run positioning/clipping in the rendered ItemBody and recapture the preview.

## ex-incomparability-in-a-quadratic-integral-extension

- Section: Example
- Source lines: 35, 37
- Kind: Leading text clipped
- Symptom: The standalone original-resolution preview omits the opening letters/text of the first body paragraph at its left edge although the frozen source contains them; subsequent text in the same paragraph is visible.
- Screenshot: screenshots/ex-incomparability-in-a-quadratic-integral-extension--01.png
- Suggested repair: Repair the first-inline-run positioning/clipping in the rendered ItemBody and recapture the preview.

## lem-finite-variable-polynomial-rings-over-fields-are-ufds

- Section: Statement
- Source lines: 34, 38
- Kind: Leading text clipped
- Symptom: The standalone original-resolution preview omits the opening letters/text of the first body paragraph at its left edge although the frozen source contains them; subsequent text in the same paragraph is visible.
- Screenshot: screenshots/lem-finite-variable-polynomial-rings-over-fields-are-ufds--01.png
- Suggested repair: Repair the first-inline-run positioning/clipping in the rendered ItemBody and recapture the preview.

## Typography observations

- lem-affine-algebra-points-as-k-algebra-maps, items/lem-affine-algebra-points-as-k-algebra-maps.md:4 — The item title displays index underscores as literal text rather than typeset mathematics. Preview: screenshots/lem-affine-algebra-points-as-k-algebra-maps--01.png.
- ex-incomparability-in-a-quadratic-integral-extension, items/ex-incomparability-in-a-quadratic-integral-extension.md:4 — The item title displays subset and exponent notation as plain text rather than typeset mathematics. Preview: screenshots/ex-incomparability-in-a-quadratic-integral-extension--01.png.

## Editorial diagram candidate

- [ex-primes-in-a-prime-localisation](items/ex-primes-in-a-prime-localisation.md:36) — A small ideal-spectrum Hasse diagram could show (0) below the three incomparable linear primes (x), (y), and (x+y), all below m=(x,y), and their images under localization. These inclusions and distinctions are correct and are preserved by the prime-localization correspondence. This is optional; the text is complete without it.

No diagram-related map/index/sign errors were seen.
