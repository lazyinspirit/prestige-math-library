# Final-adjudicator evidence: `thm-morse-functions-are-dense-by-relative-jet-transversality`

## Disposition

`repaired`

## Independent review

I inspected the current theorem and all seven direct dependencies; the full
Morse-genericity A/B-page context; the batch-18 manifest, coverage notes,
source route, and proof contract; the Step-6 reader and refuter findings and
Alpha critical-risk review; both frozen judge rejections; both exact Alpha
adjudications and defect records; and both Alpha repair accounts.

The Alpha repairs are mathematically correct.  The first replaces an
unreachable boundary-spanning construction by the compact nontransverse locus
`C_n`.  The inductive hypothesis makes `C_n` disjoint from both the protected
closed neighbourhood and `K_(n-1)`, so its bump-coordinate charts can have
closures inside the permitted open shell.  Fibre-spanning perturbations are
then needed only near `C_n`; openness of transversality on the compact
remainder supplies the rest of the current stage.  The second repair correctly
replaces the fixed `C^(n+1)` control by shell-dependent finite orders `r_n`.
A locally finite strong-neighbourhood presentation imposes only finitely many
finite-order conditions on each compact shell, so `r_n` can dominate them and
the tolerances can be chosen shellwise.

The global assembly is sound.  Proper sublevel sets satisfy
`K_n` contained in `int(K_(n+1))`; the supports in
`int(K_(n+1)) minus K_(n-1)` are locally finite; all corrections vanish near
the protected closure; and for a point in `K_n`, corrections numbered at
least `n+2` vanish locally.  Hence the limit is smooth, remains in the chosen
strong neighbourhood, agrees with `f` near `A`, and locally stabilizes at a
stage whose differential is transverse.  The cited differential/Hessian
criterion then makes the limit Morse.

## Independent repair

One boundary case remained implicit.  If a stage's compact nontransverse locus
`C_n` is empty, the bump family and its parameter space may be
zero-dimensional.  The proof nevertheless invoked the proposition that a
null set has dense complement only on a positive-dimensional parameter
manifold.  This occurs automatically on a zero-dimensional source manifold
and can also occur whenever the previous stage is already transverse on
`K_n`.

I repaired step 2.1 to take the zero correction when `C_n` is empty; openness
then gives transversality on a neighbourhood of `K_n`.  In the remaining case,
the existence of a nontransverse point forces `dim(M) > 0`, and the nonempty
coordinate cover supplies a positive-dimensional parameter space, so the
dense-complement argument in step 3.1 is now licensed.  Step 3.1 explicitly
joins the two cases.  No dependency changed, so no
`owner-prerequisite-repair` licence is applicable.

I regenerated exactly this theorem's citation and derivation entries in the
batch-18 and merged proof contracts and updated its degenerate-case boundary
record to describe the new split.  The theorem's statement and every
downstream quoted interface are unchanged.

Authoritative source verification:

- https://www.math.toronto.edu/mgualt/courses/17-1300/docs/17-1300-notes-10.pdf
  — Gualtieri's official course notes, Theorem 3.26, prove parametric
  transversality via Sard's theorem; Theorem 3.29 uses a cutoff vanishing near
  an already-transverse protected region.  These support the finite-parameter
  slice choice and the relative-support mechanism.
- https://www.mathematik.hu-berlin.de/~wendl/Winter2020/FunkAna/lecturenotes.pdf
  — Wendl's lecture notes, Section 10.3, describe the strong (very strong)
  `C^infinity` topology using arbitrary locally finite covers with independently
  varying finite derivative orders and tolerances.  This directly supports the
  Alpha's varying-`r_n` repair and the shellwise neighbourhood control.
- https://webhomes.maths.ed.ac.uk/~v1ranick/papers/hirschdx.pdf — Hirsch,
  *Differential Topology*, Chapter 2 defines strong neighbourhoods through
  locally finite chart/compact families with independent tolerances, and
  Chapter 6 states that Morse functions are dense in the strong topology.
  This verifies the ambient topology and target density theorem against a
  standard monograph.

Focused precheck and nine-file rendering passed.  The strict batch-18 contract
check passed all 18 proof-bearing items; citation fidelity found every quote
current; boundary audit found no contradicted disposition; the reviewed risk
gate passed all 18 items; batch-18 content policy passed without errors or
warnings; and repository dependency checking completed without errors.
