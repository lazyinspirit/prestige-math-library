# phase-2-next-17 — Step 3b group C supplemental authoring for D

Dispatch: `step3b-c-127be06c51139c2f`  
Owned batch: 7  
Role: supplemental author only; no Step-3 gate or independent-audit claim

## Checkpoint after the owned item

- ID: `cor-a-closed-embedded-submanifold-of-a-complete-riemannian-manifold-is-complete-in-the-induced-metric`.
- Ownership check: the basename was absent repository-wide at the first check,
  and both authorized output paths were absent immediately before creation.
- Exact claim: if every connected component of $(M,g)$ is complete for its
  Riemannian distance and $S\subseteq M$ is a closed embedded submanifold with
  $h=i^*g$, then every connected component of $(S,h)$ is complete for its
  intrinsic Riemannian distance. The usual connected case follows explicitly.
  The separate embedded-submanifold-with-boundary extension is not asserted.
- Argument: $L_h(\gamma)=L_g(i\circ\gamma)$ gives $d_g\le d_h$ on each
  connected component of $S$. An intrinsic Cauchy sequence is therefore
  ambient Cauchy. Ambient completeness supplies a limit; closedness puts it in
  $S$; the embedded subspace topology and a connected coordinate ball put it
  in the original component; equality of Riemannian-distance and manifold
  topologies gives intrinsic convergence. No Hopf--Rinow clause is used.
- Source locator: Ved Datar, *Lectures on Riemannian Geometry*, $\S$19.1,
  printed pp. 139--141 (PDF pp. 147--149), for the definition of Riemannian
  distance, Proposition 19.1.1, and Proposition 19.1.2 proving that the induced
  metric topology is the manifold topology. The complete cited passage and
  proof were checked against the live PDF. The completion argument is derived
  locally from the exact internal facts.
- Choice: none. One arbitrary Cauchy sequence is treated and completeness is
  invoked once; there is no family of choices.
- Decision: authored and locally checked, pending serial integration by the
  active group-D author. No item decision is recorded by this supplemental
  dispatch.

## Scaffold audit and canonical integration obligation

The scaffold declared the following three suppliers, all of which exist and
were read in full:

1. `def-riemannian-distance-on-a-connected-manifold` — defines intrinsic
   distance as an infimum of curve lengths.
2. `thm-the-riemannian-distance-topology-is-the-manifold-topology` — converts
   both ambient metric convergence and submanifold-topological convergence.
3. `def-complete-metric-space` — supplies the Cauchy-sequence criterion.

The completed proof exposed three additional published, earlier
well-definedness inputs that were absent from the scaffold dependency list:

1. `prop-the-inclusion-of-an-embedded-submanifold-is-a-smooth-embedding` —
   supplies immersion and subspace-topology clauses.
2. `def-pullback-riemannian-metric` — defines $h=i^*g$ and yields the
   pointwise speed identity.
3. `prop-pullback-of-a-riemannian-metric-is-riemannian-exactly-for-immersions`
   — proves that the induced tensor is a Riemannian metric.

The item frontmatter declares all six actual dependencies. During serial
integration, group D must update the batch-7 manifest entry to the same six
dependencies, add the item-specific contract below to the shared proof-contract
file, register the item in coverage and the A page, refresh the relevant current
scope/item decisions, and rerun the canonical checks. No batch-7 cross-batch
ledger row is required for this item: all six suppliers are already published,
and the item has no current row in either the batch input or unified ledger.
This supplemental dispatch is not authorized to edit those shared carriers.

## Proposed item-specific proof contract

Facts used:

- F1, `prop-the-inclusion-of-an-embedded-submanifold-is-a-smooth-embedding`,
  Statement: the inclusion is a smooth embedding; used in steps 1.1 and 4.1
  for immersion and the subspace topology. Exact excerpt: “If
  $S\subseteq M$ is an embedded submanifold equipped with the smooth structure
  from its restricted slice charts, then the inclusion $i:S\hookrightarrow M$
  is a smooth embedding.”
- F2, `def-pullback-riemannian-metric`, Definition: the pullback tensor formula;
  used in steps 1.1 and 2.1 for well-definedness and equality of curve speeds.
  Exact excerpt: “For smooth $F:M\to N$ and a Riemannian metric $h$ on $N$,
  its **pullback tensor** is
  $(F^*h)_p(v,w)=h_{F(p)}(dF_pv,dF_pw)$.”
- F3,
  `prop-pullback-of-a-riemannian-metric-is-riemannian-exactly-for-immersions`,
  Statement: pullback is Riemannian exactly for immersions; used in step 1.1.
  Exact excerpt: “$F^*h$ is Riemannian if and only if $F$ is an immersion. In
  general it is positive semidefinite, with radical $\ker dF_p$ at $p$.”
- F4, `def-riemannian-distance-on-a-connected-manifold`, Definition: distance
  is the infimum of piecewise-$C^1$ curve lengths; used in step 2.1. Exact
  excerpt: “On a connected Riemannian manifold define
  $d_g(p,q)=\inf\{L_g(\gamma):\gamma\text{ is piecewise }C^1\text{ from }p
  \text{ to }q\}$.”
- F5, `thm-the-riemannian-distance-topology-is-the-manifold-topology`,
  Statement: the two topologies agree on every connected Riemannian manifold;
  used in steps 4.1 and 6.1. Exact excerpt: “The topology of $d_g$ is the
  manifold topology on every connected Riemannian manifold.”
- F6, `def-complete-metric-space`, Definition: every Cauchy sequence converges;
  used in steps 3.1 and 6.1. Exact excerpt: “$(X,d)$ is **complete** if every
  Cauchy sequence in $(X,d)$ ([[def-cauchy-in-metric]]) converges to a point of
  $X$ ([[def-metric-convergence]]).”

Derivations:

1. Step 1.1 proves the induced tensor is Riemannian on $S$ and its component
   $C$, from F1--F3.
2. Step 2.1 proves $L_h(\gamma)=L_g(i\circ\gamma)$ and hence $d_g\le d_h$
   on $C$, from F2, F4 and step 1.1.
3. Step 3.1 transfers Cauchyness and obtains an ambient limit, from F6,
   step 2.1 and ambient component completeness.
4. Step 4.1 uses F5, closedness and F1 to put the limit in $S$ and obtain
   convergence in the submanifold topology.
5. Step 5.1 uses a connected coordinate ball to prove that the
   limit belongs to the same connected component $C$.
6. Step 6.1 uses F5 and F6 to turn topological convergence in $C$ into
   intrinsic metric convergence and conclude completeness.

Boundary evidence:

- empty: checked after step 6.1; no nonempty component, and no sequence in the
  connected empty manifold;
- zero: checked after step 6.1; the local connected chart is a singleton;
- one: checked after step 6.1; no dimension-dependent step changes;
- degenerate: checked after step 6.1; constant and eventually constant
  sequences are included;
- endpoints: inapplicable because no interval-endpoint claim occurs;
- nonempty choice: checked after step 6.1; no choice principle is used;
- iff-forward: inapplicable because the statement is the one-way implication
  from ambient completeness and closed embeddedness to intrinsic completeness;
- iff-reverse: inapplicable because no converse from intrinsic completeness to
  ambient completeness or closedness is claimed.

## Checks and open obligations

- Focused precheck: exit 0; `PASS` with direct strategy, 1 checked and 0
  failing. The first run requested canonical direct-step numbering; that local
  formatting repair was adopted before the successful rerun.
- Focused rendercheck: exit 0; 1 file, valid YAML and KaTeX, with no delimiter,
  multiline-display, or wikilink-in-math error.
- Focused content policy: exit 0 on a one-item temporary manifest; scope 1,
  0 errors and 0 warnings. The temporary validation input was removed after
  use and is not a canonical carrier.
- Strict proof-contract check: exit 0 on the one-item contract transcribed
  above; 1/1 checked, 0 errors and 0 warnings. The temporary contract was
  removed after use. Group D must put this contract in the shared carrier and
  rerun strict checking there.
- Plan validation: exit 1 on `research/plan-spec.json` because of the current
  pre-splice repository state: 5,094 reported issue lines, comprising 1,254
  `dup-id` and 3,840 `redundant-prereq` entries. There were zero mentions of
  this item ID. This is reported for Step 4 and is not hidden or represented as
  a pass.
- Open mathematical gaps: none presently identified.
- Published concerns: none discovered for the six suppliers used here.
- Next action: group D/owner serially integrates the manifest, contract,
  coverage, A page, dependency input and current decisions, then reruns the
  canonical checks. No Step-3 gate or independent-audit result is claimed.
