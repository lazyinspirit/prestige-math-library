# Final-adjudicator evidence: `lem-parameter-power-series-subring-makes-ring-finite`

Disposition: `repaired`.

## Scope inspected

I independently read the current lemma and each of its six direct dependencies,
including the exact Complete Nakayama interface; the preceding coefficient-field
and formal-substitution route; the following injectivity lemma and endpoint
corollary; both A/B pages; the CA-14 design block; batch-3 manifest, notes, and
coverage ledger; the batch proof contract and risk record; the Step-6 reader and
cross-impact records; both frozen judge rejections and exact Alpha
adjudications; both defect-ledger rows; and Alpha's two repair reports.

## Fatal history and Alpha repairs

The first frozen rejection, context
`2c9fdc9f95a13a087818d271803f819a9a83d3171a5d107dac25170a652cc691`,
correctly rejected the inference that the image $A_0$ of a complete ring is
automatically complete. Alpha's first repair correctly applies Complete
Nakayama over the source
$B=k\llbracket X_1,\ldots,X_d\rrbracket$, proves that $A$ is separated for
$I_0=(X_1,\ldots,X_d)$, and only then passes finite $B$-generation through the
action to $A_0=\phi(B)$. It also correctly exposes the Axiom of Dependent Choice
required by the local Complete Nakayama theorem.

The second frozen rejection, context
`f05f1d902932ec1f2d63886154716a448e21f0b7e9e4eb3868ecde423e8d91d2`,
correctly observed that finiteness over the image does not yet make that image
an identified power-series subring: injectivity belongs to the following
lemma. Alpha correctly narrowed the title, proof-technique line, and conclusion
to the image of the parameter map. The resulting item judge hash is
`9c5a138aa47eadcc9bf0804bbf6d4dc601cdebaff3f4230fe219c133ac6b6d31`.

## Independent mathematical review

The repaired item body is correct. If $J=(x_1,\ldots,x_d)$, the parameter
hypothesis makes $J$ $\mathfrak m$-primary. Thus some $\mathfrak m^N$ lies in
$J$; since $A$ is Noetherian and $k\cong A/\mathfrak m$, the finite filtration
of $A/J$ by maximal-ideal powers has finite-dimensional $k$-vector-space
factors. Hence $A/J$ is finite-dimensional over $k$ and admits the finitely
many lifted generators chosen in step 1.1.

Under the continuous parameter map, $A$ is a $B$-module and
$I_0A=J$. The formal-series ring $B$ is $I_0$-adically complete. Moreover
$I_0^nA=J^n\subseteq\mathfrak m^n$, so the $\mathfrak m$-adic separatedness
included in completeness of $A$ implies $I_0$-adic separatedness. The exact
Complete Nakayama dependency therefore turns the generators modulo $I_0A$
into generators of $A$ over $B$. Because the action of $B$ factors through
$B/\ker\phi\cong A_0$, the same finite set generates over $A_0$. No
injectivity, closed-kernel, or completeness-of-image assertion is used.

The $d=0$ boundary also works. The parameter tuple and $I_0$ are empty/zero;
because $A$ is a local domain and $\sqrt{(0)}=\mathfrak m$, one has
$\mathfrak m=0$, and the coefficient field identifies with $A$. The argument
then reduces to finite generation of $A=k$ over itself. The coefficient-field
existence corollary is not invoked inside this conditional lemma—the field is
given—so its stronger Choice assumption is not imported; the only countable
choice used here is the explicitly stated DC in Complete Nakayama.

## Independent contract repair

Although the item body was correct after Alpha's second repair, its source
batch metadata still asserted the old “power-series subring” title and
strategy, and its proof contract still reproduced the first fatal inference
that completeness of the source makes $A_0$ complete. Its risk review also
claimed Complete Nakayama was applied over that image, and its boundary table
incorrectly marked the empty $d=0$ parameter tuple inapplicable.

I repaired `research/frontier-29-batch-3.pages.json` to state finiteness over
the image, record the source-ring Complete Nakayama argument, and synchronize
the direct dependency list. I regenerated the contract's citations and
derivations from the current proof, rewrote the risk review around the actual
source-ring argument, and explicitly checked the $d=0$, zero-ideal, and choice
boundaries. No item or direct-dependency bytes were changed, so no
owner-prerequisite-repair licence is needed.

## Authoritative source verification

- Melvin Hochster, *The structure theory of complete local rings*, especially
  the Complete Nakayama proposition on PDF p. 5 and the parameter theorem on
  PDF p. 7:
  https://sites.lsa.umich.edu/hochster/wp-content/uploads/sites/1337/2026/04/Structure.pdf
  This source proves module finiteness over the image first and treats
  injectivity for a system of parameters as a separate dimension argument.
- The Stacks Project, Section 10.160, Lemma 10.160.11:
  https://stacks.math.columbia.edu/tag/0323
  In the equicharacteristic case it chooses an ideal of definition, applies
  Complete Nakayama to the complete source power-series ring to obtain
  finiteness, and only afterward proves injectivity from dimension.
- The Stacks Project, Lemma 10.96.12:
  https://stacks.math.columbia.edu/tag/00M9
  This gives the exact lifting criterion used locally: an $I$-adically
  complete source ring, an $I$-adically separated module, and a finite quotient
  imply that the module is finite.

## Focused checks

- The item passed focused phase-format precheck and renderer/YAML/KaTeX checks.
- Batch-3 JSON parsing and content policy passed for all 48 scoped items.
- The regenerated strict proof contract, citation fidelity, risk review, and
  contradicted-boundary checks were run against the current files.
- Batch-3 source-fetch verification passed for all five recorded sources.

No judge verdict or pass stamp was created.
