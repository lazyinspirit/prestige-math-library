# MT6.1: actual source and the smallest local supplier still needed

Author development, not independent adoption. This is not a proof of
the original flyping theorem, MT6.1 geometry, or any Kindred repair.
MT6.2 is not reread or used to supply an intersection-pattern lemma.

## Primary actually read

I directly read the supplied Section6 opening and the complete MT6.1
statement/proof in these original images under `../user-provided-pages/`:

- `section6-opening-definitions-p163-164.png`;
- `proposition6-1-statement-proof-p164-165.png`;
- `proposition6-1-proof-p165-166.png`;
- `proposition6-1-proof-end-p166-167.png`.

These include Figures6.1–6.3. The supplied page inventory does not
contain Proposition5.5, Figure5.5, Figure5.6, or the full Section3
saddle-condition setup. The primary-acquisition owner reports no full
MT paper or new5.5 primary acquired. Acquisition was not duplicated.
The other flyping owner confirms that no adopted MT over/under-slot
interface or Figure5.5(i) supplier is available; Kindred interfaces
cannot replace these different geometric data.

## Exact finite resources and relation

For a surface F equal to f(beta_1) or f(omega_1), the source defines:

- Lambda_F: components of F intersect S^2_{2+/-} not bounding disk
  regions of D_2;
- Gamma_F: crossing balls good for F;
- Sigma_F: actual saddle intersections of F with crossing balls;
- A_F: regions of D_2 of F's color incident to just one crossing;
- Z_F: boundary edges of the cellulation C_F missing crossing balls.

All these are finite in the supplied finite nice-position setting.
The resource space is the TAGGED disjoint union

    I_F=Gamma_F disjoint-union Sigma_F disjoint-union A_F disjoint-union Z_F.

A ball and a saddle lying in that ball are different resource types;
two distinct saddles in one ball are different Sigma resources.
Proposition6.1 seeks the literal SET relation

    R_F subset Lambda_F times I_F

with two DISTINCT resource labels per C, and resource capacities
2,2,1,1 respectively. Counting two occurrences of the same resource
for one C would give only one pair in R_F and is insufficient.

## Three source rows, without conflating their suppliers

**One interior edge.** Source pp164–165 records one A_F object and
one Gamma_F object and identifies the configuration with Figure5.5(i).
The typed map from this cellulation pattern to those two actual
objects, and their owner slots, is a needed local input. The supplied
Section6 prose states this row but does not include that figure or
its earlier derivation. It is not justified by the later5.5 collision
exclusion alone.

**At least two interior edges, none transverse.** Source p165 and
Figure6.2 give two distinct Z_F subarcs of C. Each nontransverse edge
has a Z_F neighbor by alternation. If there were only one Z_F edge,
at most two interior edges could neighbor it. Their other ends would
have no Z_F neighbors. If those ends reach the same ball, the
projection crosses the underlying four-valent plane graph oddly;
if different balls, alternation fails. These are the two actual
Figure6.2 local patterns. This row uses the MT trace/alternation
incidences and plane-graph parity; it does not invoke5.5. Each
selected Z_F edge belongs to its unique component C.

**At least one transverse edge.** The source obtains a finite
noncrossing inside-arc system and two boundary intervals eta_1,eta_2
by an outermost-arc argument. A separate finite lemma below earns
that pairing ONCE the actual trace arcs give the stipulated disk
system. An eta containing a Z_F edge supplies that edge. Otherwise:

1. It has no nontransverse interior edge (these would touch Z_F).
2. It has no transverse interior edge (that would be another entry
   or exit in the chosen empty interval).
3. Thus it is a boundary trace, and meets a crossing ball, since
   otherwise it would itself contain a Z_F edge.
4. The saddle condition forbids a complete overpass in its interior
   and forbids a saddle at the entry point. The exit is then over
   a crossing ball, producing a good ball, or through a saddle.

This is the local EXIT map

    eta -> (Gamma_F ball OR Sigma_F saddle, designated owner slot).

The statement that these are exactly the alternatives, and goodness
in the overpass case, is geometric. It requires the actual MT saddle
condition and good-ball incidence, not just the abstract word
“outermost.”

## The precise noncollision seam

When both eta intervals have no Z_F, their EXIT resources must be
different. Source p167 checks the potential same-ball cases:

- two underpass exits cannot fit;
- a saddle exit and an underpass exit leave the opposite-side
  lower arc with nowhere to go (Figure6.3(iii));
- two opposite saddle exits sigma_1 != sigma_2 violate the saddle
  condition, referring to the last paragraph of proof3.1(ii);
- two opposite saddle exits sigma_1 = sigma_2 give exactly
  Figure5.6(i), **excluded by Proposition5.5**.

The last bullet is the exact still-missing5.5 input. Its statement,
hypotheses, and proof are NOT supplied here. In particular I have not
asserted that simple/minimal-complexity hypotheses can be dropped,
or that some Kindred normalizer proves this exclusion. The previous
bullets retain their separate saddle-condition suppliers. These
conditions produce distinct resource labels, not just distinct
occurrence points or distinct ports of the same resource.

## Minimal local port supplier contract

The finite counting consumer needs the following local data, not
another global counting inequality. Supply a finite set of ports:

    P_F=(Gamma_F times {over,under})
        disjoint-union (Sigma_F times {over,under})
        disjoint-union (A_F times {one})
        disjoint-union (Z_F times {one}),

and a PARTIAL FUNCTION owner:P_F -> Lambda_F. “Over/under” here must
be the actual MT local trace incidences, not newly invented saddle
arms. For Gamma/Sigma the source's broad recording rule uses a
component running along the overpass or underpass of the relevant
ball. The required local supplier must identify these precise two
incidences, show each has at most one component owner, and show the
EXIT map lands in an incidence owned by its original C. It is not
enough to say a saddle has four arms or just to name two slots.

Supply also the one-edge row, the no-transverse row, and for each
transverse C the actual proper noncrossing disk-arc system with
entry/exit labels, the EXIT map above, and its noncollision checks.
Any two choices made for C must have DIFFERENT resource projections.
The two single ports give capacities1 for A_F,Z_F; the two actual
local owner ports give capacities2 for Gamma_F,Sigma_F.

This is the smallest useful geometric supplier map isolated here:
typed local traces -> owned ports, with the four explicit collision
rows. It is substantially more local than MT6.1. However, its exact
saddle owner interpretation and the missing5.5 exclusion are NOT
proved by the presently available pages. The independent finite
ear/counting consumer does not conceal these gaps.

## What is independently ready

`finite-ear-pairing-and-port-count.md` proves the finite outermost
pairing and literal relation/capacity inequality from these typed
inputs. It does not use MT6.2 or any missing geometric supplier as
though proved. Next primary need is the complete5.5 statement/proof
with Figures5.5–5.6 and the referenced saddle-condition paragraph;
the existing acquisition owner retains that task.
