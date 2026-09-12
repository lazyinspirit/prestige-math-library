# U-AX numerical proof-obligation checker and the remaining uniform theorem

Date: 2026-09-12. This is preparatory batch-11 evidence. It is not a library
item, proof-contract amendment, Step-3 decision, or certification. The
companion executable is
[`support-phase-2-next-17-uax-proof-obligation-checker.mjs`](support-phase-2-next-17-uax-proof-obligation-checker.mjs).

## 1. What is now executable

The companion program uses the exact sentinel list coding, formula decoder,
canonical ZF certificate predicate, ZF proof checker, and raw relativization
already fixed by the earlier support artifacts. It adds four fail-closed
operations.

1. `schemaObligation(d,c)` accepts every well-formed canonical Separation or
   Replacement certificate `c`, with no restriction on its matrix. It returns
   the reconstructed source axiom code, the exact raw relativization code, the
   guarded code, the relativized matrix code, and the designated variables.
   Malformed input returns `null`.
2. `sealSchemaProof(d,c,p)` returns a numerical witness only when the unchanged
   ZF checker accepts `p` at that exact raw endpoint. The witness repeats the
   domain, source certificate, reconstructed source, raw endpoint, guarded
   endpoint, and proof. `checkSchemaProofWitness` recomputes every repeated
   field and checks the proof again.
3. `fixedZFObligation(d,j)` performs the same exact endpoint computation for
   each of the six fixed ZF axioms, using its canonical certificate `[0,j]`.
   `sealFixedZFProof` and `checkFixedZFProofWitness` seal and recheck any later
   supplied proof block.
4. `translateFormulaEndpoint(d,a)` exposes the same capture-avoiding raw
   relativization for an arbitrary parsed formula. This is used only for exact
   endpoint construction, not as a proof of that endpoint.

The numerical schema-witness format is

```text
[11, domain-code, source-certificate, reconstructed-source-code,
     exact-raw-endpoint-code, exact-guarded-endpoint-code, ZF-proof-code].
```

The fixed-ZF format replaces the source certificate with the fixed index and
uses tag 12. Redundant fields are deliberate: changing the matrix, designated
variable, domain, alpha-renaming, source sentence, or requested endpoint makes
the checker reject.

## 2. Exact endpoint and primitive-recursive invariant

Let `Adm(c)` mean that `c` is a canonical Separation or Replacement
certificate. Let `Ax(c)` be the exact sentence reconstructed by the existing
certificate predicate. For a one-free-variable domain formula `d`, let
`Tau(d,Ax(c))` be the alpha-hygienic raw relativization used by the executable.
Bound variables inside the copied domain formula are renamed above every
variable index in both the domain and source formula before that copy is
substituted at a quantifier. Thus this endpoint is literal numerical equality,
not alpha-equivalence and not semantic equivalence.

For a decoded seven-field witness `w`, the executable predicate is exactly

```text
SchemaWitness(w) iff
  tag(w)=11 and Adm(cert(w)) and
  source(w)=Ax(cert(w)) and
  raw(w)=Tau(domain(w),source(w)) and
  guarded(w)=Guard(domain(w),source(w)) -> raw(w) and
  Prf_ZF(proof(w),raw(w)).
```

Every operation in this display is primitive recursive under the published
coding interface: bounded list decoding and coordinates, syntax recognition,
free-variable lists, maximum/fresh-index selection, capture-free substitution,
structural translation retaining a finite history, canonical schema
reconstruction, numerical equality, and certified proof checking. The sealer
is a bounded case distinction returning the encoded seven-field list when the
predicate holds and zero otherwise. Consequently PA can verify the syntactic
invariants

```text
seal(d,c,p) != 0 -> SchemaWitness(seal(d,c,p)),
SchemaWitness(w) -> Prf_ZF(proof(w),raw(w)),
SchemaWitness(w) -> raw(w)=Tau(domain(w),Ax(cert(w))).
```

The proof is induction on the finite parse/translation table followed by the
proof checker's line-prefix induction. At an atomic node the variable indices
are unchanged. Negation and conjunction reuse the child endpoints. At an
existential node the normalized domain copy has only the quantified variable
free, its internal binders are fresh for the whole source, and the output is
literally `exists x (D_x and Tau(child))`. The certificate cases reconstruct
the canonical closure and locally fresh uniqueness variable before this
translation. The final bounded comparisons establish the repeated-field
equalities. The proof-checker induction supplies the last conjunct.

This is a PA-verifiable invariant in the sense of the repository's published
primitive-recursive representability interface. This support does **not**
contain a numerical PA derivation of the displayed universal formulas, and it
does not identify running JavaScript tests with such a derivation.

## 3. Executed coverage

The positive tests construct exact obligations for arbitrary matrices over two
domains, including:

- a designated variable absent from the matrix;
- nested rebinding;
- a large variable index above `2^80`;
- both Separation and Replacement, with multiple designated-variable pairs;
- all six fixed ZF axioms.

For each schema case the canonical source certificate is independently checked,
the raw and guarded endpoints are checked to be closed, and the generic formula
translator is compared with the schema translator. For every fixed ZF axiom,
the endpoint is independently cross-checked against the existing guarded-proof
transport context applied to its accepted one-line source proof.

Two currently available proof families give genuine positive numerical witness
tests: Separation with matrix `z=z`, and Replacement with matrix `w=z`. Their
proofs pass the unchanged ZF checker before sealing and after decoding the
witness.

Adversarial tests reject altered source, raw, and guarded endpoint fields;
extra witness fields; malformed domains; unknown schema tags; coincident
Replacement variables; missing or wrong proofs; invalid fixed-axiom indices;
and the absent AC/GCH slots. These are behavioral tests, not a proof of the
uniform PA statement.

## 4. Fixed ZF, AC, and GCH inventory

Current executable dependencies permit exact source-certificate and raw-endpoint
construction for all six fixed ZF axioms. They do **not** contain ZF proofs of
those six relativizations to the intended constructibility predicate, so no
fixed proof witness is manufactured.

The current numerical theory kernel has no fixed U-theory certificate tags or
pure-membership sentence codes for AC and GCH. The prose definitions and
mathematical L theorems do not determine a literal code in this proof calculus.
Accordingly the executable rejects those slots. Adding arbitrary caller-chosen
sentence codes would make the dispatch appear stronger while failing to prove
that they are the target theory's AC and GCH axioms.

Before U-AX assembly, the following finite data must therefore be supplied and
checked:

- six ZF proofs ending at their exact raw L-relativizations;
- one exact pure-membership AC sentence, its U-certificate tag, and a ZF proof
  of its raw L-relativization;
- one exact pure-membership GCH sentence, its U-certificate tag, and a ZF proof
  of its raw L-relativization.

These are finitely many constants once the domain and U-certificate presentation
are fixed. Their absence is distinct from the uniform schema gap.

## 5. Smallest still-missing uniform theorem

The checker closes ambiguity about certificates and endpoints, but it cannot
turn existence of a proof into a proof-producing primitive-recursive map. The
smallest missing infinite-family theorem is still a specified Separation
constructor `S` for the chosen constructibility formula `D`:

```text
PA proves: for every admissible Separation certificate c,
  Prf_ZF(S(c), Tau(D,Ax(c))).                         (SEP-L)
```

The current `schemaProof` generator proves only the identity-matrix pilot. A
search for the first accepted proof, even if every standard instance is known
externally to be provable, is not a primitive-recursive constructor and does
not establish the displayed PA theorem for all coded inputs.

Once SEP-L is supplied, the Replacement tail still requires the fixed
rank-bound and closure templates described in the existing Separation kernel.
It must call `S` on the original matrix

```text
exists z (z in a and phi(z,w,parameters)),
```

not on an already relativized copy. That finite assembly would then establish
the corresponding REP-L constructor theorem. Finally the checked fixed
ZF/AC/GCH blocks and the already executable guarded logical/inference
translation can be dispatched to obtain AX-L.

Thus the present support is a concrete, arbitrary-matrix obligation and proof
checker with exact endpoints. It deliberately does not claim the missing
arbitrary Separation/Replacement proof producer, the fixed relativized axiom
proofs, or item certification.
