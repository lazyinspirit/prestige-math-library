# Batch 1 of run `frontier-15` — quadratic reciprocity and the Jacobi symbol

One A/B pair. You own both pages and author them at step 5.

| | |
|---|---|
| A page | `quadratic-reciprocity-and-the-jacobi-symbol` · order **57.005** · `number-theory` |
| B page | `quadratic-reciprocity-and-the-jacobi-symbol-examples` · order **57.006** |
| requires | `quadratic-residues-and-the-legendre-symbol-examples` — published; its closure carries NT-1, NT-2 and the elementary number-theory pages |
| design | `research/plan-number-theory-track.md` §NT-3, from line ~424 |

The design is unusually complete: a **14-item A-page table in dependency
order with per-item provenance locators**, and an 8-item B-page table. Treat
it as a floor to harvest against, not a transcription source — you still open
every source, record the exact ranges you read, and write the coverage
harvest.

Sources named with exact locators: Hackman §D.V "The Rectangle Proof"
pp. 127–130 and §D.II "The Jacobi Symbol" pp. 118–122; Stein §§4.1, 4.3
(Thm. 4.1.7, Lemmas 4.3.1–4.3.4); Gorodnik Lectures 9–10 (reciprocity,
Jacobi) and Lecture 7 §1 (the lifting lemma). Two full independent
treatments; verify liveness and record what you read.

## The traps the design states — hold yourself to them

1. **No floor function.** The reciprocity proof is lattice-point counting
   over integer/rational inequalities. The real-analysis floor item is NOT a
   dependency, and citing it is a forward reference. The design phrased
   Gauss's lemma as a finite-set count precisely to avoid it.
2. **The Jacobi zero-convention is a decided fork.** `(a/n) = 0` when
   `gcd(a,n) > 1`, empty product at `n = 1`. Hackman defines it only for
   coprime arguments — the library adopts the zero extension, and the
   well-definedness proof is uniqueness of prime factorisation, cited not
   re-proved.
3. **The lifting lemma is a directly proved congruence lemma**, not "Hensel's
   lemma". Do not mint a general Henselian statement; the commutative-algebra
   track owns that.
4. **ZF only.** Everything here is finite; no choice principle may appear.
5. The design's B page includes `cex-jacobi-symbol-one-does-not-imply-a-square`
   — `(2/15) = 1` with the obstruction mod 3. Counterexamples of this class
   are what the pair is for; do not drop them for ergonomics.

## Size

14 + 8 proposed — nowhere near the 60-item ceiling. If your harvest turns up
results the design missed, add them; never pad.

**No permission prompts of any kind**, including inside an `&&` chain.
