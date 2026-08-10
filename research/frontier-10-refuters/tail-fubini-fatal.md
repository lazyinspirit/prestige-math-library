
## Your cluster — `fubini-fatal`: the three repaired fatal proofs in change of variables

Pages: `fubini-and-change-of-variables` (A, 25 items) and its `-examples` (B, 13).

The independent reader found **four fatal families here** and rewrote the proofs.
You are checking the rewrites. Take each one personally.

**F1 — `lem-finite-jordan-cover-sum-bounds` had a FALSE Statement.** The original
upper-bound clause constrained $M_i$ only where $E\cap E_i\neq\emptyset$, so a
cover member disjoint from $E$ could carry a negative coefficient: with
$E=E_1=[0,1]$, $h=0$, $M_1=0$, $E_2=[2,3]$, $M_2=-1$ the asserted inequality read
$0\le-1$. The reader **changed the Statement** to require every $M_i\ge0$.
Critical: repairing a proof does not establish an altered Statement. Read the new
Statement on its own and try to break it — is $M_i \ge 0$ for **all** $i$ enough,
or does the lower-bound clause now need its own sign condition? Does the new
common-rectangle extension of $h$ and the indicators actually give a valid
pointwise majorant **off** $E$ as well as on it? Check the zero function, the
empty $E$, a cover with a member disjoint from $E$, and a cover whose members
overlap.

**F2 — `thm-linear-images-scale-jordan-content-by-absolute-determinant` was
CIRCULAR.** The original invoked `cor-cavalieri-principle-for-jordan-content` to
prove content preservation under a shear *before* proving the shear image was
Jordan measurable — but that corollary assumes its target set is already bounded
Jordan. The reader's repair claims to fix the order: elementary matrices and
their inverses are treated as Lipschitz homeomorphisms, $\partial(E_0F)=E_0(\partial F)$
is proved, null-boundary preservation gives Jordan measurability, and only then
is Cavalieri used for the shear. **Verify the repair is not circular by a longer
route.** Specifically: does the proof of $\partial(E_0F)=E_0(\partial F)$ itself
use any content or measurability fact about $E_0F$? Does "null boundary
preservation" cite a result that already presumes Jordan measurability? Trace the
dependency chain of every fact used before the Cavalieri invocation and confirm
none of them closes a loop back onto the conclusion. Also check the singular
(non-invertible) branch separately — it cannot use the invertible factorisation.

**F3 — `lem-local-c-one-volume-distortion` took content of sets not shown
Jordan.** The original passed from a near-identity cube sandwich to content
bounds for $H(C)$ and then to *every* Jordan $E\subseteq Q$, but the cited
near-identity lemma gives only containments and injectivity. The reader states
that Leibman Lemma 5.5.6 proves the **cube** case and does not by itself give the
every-Jordan-subset clause. The repair derives a local bi-Lipschitz
homeomorphism, extends the local Lipschitz restriction by coordinatewise
clamping, and maps null boundaries to null boundaries. **Check the clamping
extension actually preserves injectivity and the Lipschitz constant on the
relevant set**, and that "Lipschitz image of a null set is null" is cited to
something that states it in the required dimension.

**F4 — a systematic $n\ge1$ domain repair across 14 items.** The near-identity
estimate contains $q/\sqrt n$, undefined at $n=0$, and the determinant interfaces
are stated only for $n\ge1$. Each affected Statement/Definition now says $n\ge1$.
Check the hypothesis was added **everywhere it is needed and nowhere it is
false**, and that no proof step still silently uses an $n=0$ instance.

**Also check the batch-9 determinant seam.** These proofs cite determinant
results authored in a different batch. `def-determinant-of-a-square-matrix`,
`thm-determinant-multiplicative` and `thm-determinant-under-elementary-row-operations`
are stated **over a commutative ring**; `thm-real-square-matrix-invertible-iff-determinant-nonzero`
and `thm-invertible-matrices-factor-into-elementary-matrices` are **field/real**
results. A ring-level result used where a field-level conclusion is needed, or a
field result applied over a ring, is fatal. Read each cited target on disk.

Read every one of these in full:

- `lem-finite-jordan-cover-sum-bounds`
- `thm-linear-images-scale-jordan-content-by-absolute-determinant`
- `lem-local-c-one-volume-distortion`
- `lem-near-identity-c-one-maps-sandwich-cubes`
- `cor-cavalieri-principle-for-jordan-content`
- `thm-injective-c-one-images-of-compact-jordan-sets-are-jordan`
- `thm-change-of-variables-for-compact-jordan-sets`
- `cor-parallelepiped-content-is-the-absolute-determinant`
- `def-jacobian-determinant-of-a-c-one-map`
- `cor-change-of-variables-on-bounded-open-jordan-sets`
- `cor-change-of-variables-for-compactly-supported-functions`
- `cor-one-dimensional-change-of-variables-with-absolute-derivative`
