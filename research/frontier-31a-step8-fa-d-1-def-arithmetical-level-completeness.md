# FA terminal evidence — queue d, position 1

Item: `def-arithmetical-level-completeness`. Decision: repaired.

Independently read the current definition, both direct dependencies
`def-sigma-n-pi-n-and-delta-n-sets` and `def-computable-many-one-reduction`,
the arithmetical hierarchy A/B pages, batch-21 manifest, coverage entries
for Definition 5.2 and II.6.8, scaffold conventions, reader/refuter records,
and the two Terra rejection rows plus Alpha's adjudication and repair report.
The batch proof-contract file has no contract for this definition: there is
no proof obligation or proof section. The refuter flags no defect on this item.

The original rejection correctly identified the mismatch between subsets of
natural numbers and the string-language reduction interface. Alpha's explicit
binary-numeral encoding repairs that mismatch. The final rejection identifies
an avoidable arity ambiguity: the level definition also applies to relations
on N^k, whereas the newly defined reduction is unary. I explicitly restricted
the hardness quantifier to A subseteq N. The Pi clause inherits that restriction
by its explicit instruction to replace Sigma with Pi. Both membership and
hardness now have compatible types. No claim of higher-arity reductions is made.

This is familiar elementary computability mathematics; no external verification
was necessary. The local dependencies completely specify the logical interface.
The encoded languages have a decidable numeral convention; total string
reductions preserve yes and no instances on every string. For a nontrivial
target this agrees with ordinary numerical many-one reducibility by decoding
valid outputs and sending invalid outputs to a fixed nonmember. Complete targets
are necessarily nontrivial, since the quantified class contains decidable
nonempty and proper subsets. Thus the encoding does not change completeness.

No dependency, page, manifest, or proof contract requires modification: their
existing claims already specify completeness of sets of natural numbers.
Focused rendercheck passed; precheck reported 0 checked and 0 failing, as
appropriate for a definition. No judge stamp was created.

Unresolved mathematical obligations: none for this item. Next action: record
these exact bytes with the terminal recorder, then begin queue position 2.

Receipt refresh at position 14: the sibling nondeterministic hierarchy interface now explicitly states the page's eventual linear floors. Existing uses, including polynomial separation, satisfy these floors; this item's mathematical decision is unchanged. Resealed in queue order for the current page context.
