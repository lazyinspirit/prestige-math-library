# Frontier 9 published dependency repairs

**Owner delegation:** 2026-08-03  
**Repairing auditor:** Alpha-9, GPT-5.6 Sol at xhigh through the Codex subscription  
**Independent reader:** Spine Refuter B (`/root/frontier9_alpha/spine_refuter_b`), GPT-5.6 Sol at xhigh through the Codex subscription  
**Impact receipt:** `research/frontier-9-impact-audit.json`  
**Touch ledger:** `research/frontier-9-touches.json`

The independent reader was read-only and did not author either repair. The
reader reviewed both current full proofs and their used source statements,
then certified that the current proofs are complete, statement-preserving, and
free of new mathematical or dependency defects. The corresponding item
frontmatter records this owner-delegated certification under
`verification.verified`; it is not a judge or owner-audit stamp.

## `thm-int-comm-ring`

### Defect and dedicated touch baseline

The published proof used uncited assumptions A1--A4 for natural addition,
multiplication, distributivity, zero, and identity laws. This was a fatal
dependency-citation defect because those assumptions supplied essentially all
ring-axiom calculations.

- Before: snapshot `pre-step8`, mathematical hash `0ed39baabd8cf986`, public
  surface hash `e6c892aedebd8b4f`.
- After: snapshot `post-alpha-step8-repairs`, mathematical hash
  `d459a6e283a3d7b0`, public surface hash `fd755c0ee73c0fc7`.

### Old and corrected text

Old direct dependencies:

```yaml
deps: [def-integers, def-int-operations, lem-int-add-well-defined, lem-int-mul-well-defined]
```

Corrected direct dependencies:

```yaml
deps: [def-integers, def-int-operations, lem-int-add-well-defined,
       lem-int-mul-well-defined, lem-nat-add-commutative,
       lem-nat-add-associative, lem-nat-add-identity,
       lem-nat-mult-commutative, lem-nat-mult-associative,
       lem-nat-mult-distributive, lem-nat-mult-identity]
```

Old Facts block:

```text
[A1] Addition on $\mathbb{N}$ is commutative and associative.
[A2] Multiplication on $\mathbb{N}$ is commutative and associative.
[A3] Distributivity in $\mathbb{N}$: $x(y+z) = xy + xz$.
[A4] In $\mathbb{N}$: $x + 0 = x$, $x \cdot 1 = x$, $x \cdot 0 = 0$.
[L1] The operations are independent of representatives
     ([[lem-int-add-well-defined]], [[lem-int-mul-well-defined]]).
```

Corrected Facts block:

```text
[L1] Addition on $\mathbb{N}$ is commutative and associative, with zero as a
     two-sided identity ([[lem-nat-add-commutative]],
     [[lem-nat-add-associative]], [[lem-nat-add-identity]]).
[L2] Multiplication on $\mathbb{N}$ is commutative and associative, distributes over
     addition, and has the usual zero and identity laws
     ([[lem-nat-mult-commutative]], [[lem-nat-mult-associative]],
     [[lem-nat-mult-distributive]], [[lem-nat-mult-identity]]).
[L3] The integer operations are independent of representatives
     ([[lem-int-add-well-defined]], [[lem-int-mul-well-defined]]).
```

The proof calculations were unchanged. Step 1.1 was retagged from L1 to L3;
steps 1.2--1.5 from A1/A4 to L1; and steps 1.6--1.9 from A1--A4 to the exact
L1/L2 source packages they use.

### Elementary/source basis and provenance

The corrected citations are the exact published natural-arithmetic theorems:
addition commutativity, associativity, and identity; multiplication
commutativity, associativity, distributivity, identity, and zero laws; plus the
existing integer-operation well-definedness lemmas. Expanding representatives
then gives each displayed equality by elementary substitution and regrouping.

The Statement provenance remains `literature-derived`; the materially repaired
proof remains `ai-altered`. Neither label was changed by this closure step.

### Independent certification, impact, and exact fresh pair

Spine Refuter B independently read the current full proof and its used sources
and certified it clean. The impact receipt computes 1,986 logical consumers,
including 109 direct citation consumers. Every affected consumer is disposed
`still-licensed` because the Statement was not changed or weakened.

The exact post-repair pair at context
`c0d7385a181ff22f7979aae8d1260beffb20e0690256a2f3ad53bf75cb3e307f`
was:

- GPT-5.6 Terra: `keep: true`, 2026-08-02T17:36:01.374Z.
- DeepSeek V4 Pro: `keep: true`, 2026-08-02T17:39:23.236Z.

The later proof-only repair to the sibling integer-order theorem changed the
shared page context but did not change this item. The certification block added
on 2026-08-03 is frontmatter-only and does not change the mathematical audit
body; by the owner's no-waste instruction it does not warrant another paired
call. The post-metadata prompt attestation is
`48077e105867dbb0bd03a18e9448098a3a576e4844c458bd89b18da93b617197`.

## `thm-int-ordered-ring`

### Defects and dedicated touch baselines

The initial published proof used uncited A1--A5 natural-order/arithmetic laws,
proved only one direction of representative independence, and compressed the
positive-product argument. A later exact-hash judge rejection correctly noted
that the final commutative-ring conclusion did not cite the already-declared
`thm-int-comm-ring`; under the 30-second rule that citation omission was
nonfatal, but the owner explicitly delegated its repair.

Initial dependency repair:

- Before: snapshot `pre-step8`, mathematical hash `64a68c70976dd7d3`, public
  surface hash `c5600bbf6550d0d9`.
- After: snapshot `post-alpha-step8-repairs`, mathematical hash
  `4928125fb55f0d8f`, public surface hash `4f9129bac5564b55`.

Citation-only follow-up:

- Before: snapshot `pre-targeted-int-ordered-citation-repair`, mathematical
  hash `4928125fb55f0d8f`, public surface hash `4f9129bac5564b55`.
- After: snapshot `post-targeted-int-ordered-citation-repair`, mathematical
  hash `6b6e7666b2f7b1b6`, public surface hash `510b8a1a87ebcd73`.

### Old and corrected text

Old direct dependencies:

```yaml
deps: [def-integers, def-int-operations, def-int-order, thm-int-comm-ring]
```

Corrected direct dependencies:

```yaml
deps: [def-integers, def-int-operations, def-int-order, def-nat-order,
       thm-int-comm-ring, lem-nat-add-commutative,
       lem-nat-add-associative, thm-nat-linear-order,
       lem-nat-order-add-compatible, lem-nat-mult-commutative,
       lem-nat-mult-associative, lem-nat-mult-distributive,
       lem-nat-mult-identity, lem-nat-order-mult-compatible]
```

Old Facts block:

```text
[A1] Addition on $\mathbb{N}$ is commutative and associative.
[A2] The order on $\mathbb{N}$ is total, antisymmetric, and transitive.
[A3] In $\mathbb{N}$: $x \le y$ if and only if $x + z \le y + z$.
[A4] In $\mathbb{N}$: if $x \le y$ then $y = x + k$ for some $k$, with
     $k \ge 1$ when $x < y$.
[A5] Multiplication on $\mathbb{N}$ is commutative, associative, distributes
     over addition, and $k, m \ge 1$ imply $km \ge 1$.
```

Corrected Facts block:

```text
[L1] Addition on $\mathbb{N}$ is commutative and associative
     ([[lem-nat-add-commutative]], [[lem-nat-add-associative]]).
[L2] The order on $\mathbb{N}$ is total, antisymmetric, and transitive
     ([[thm-nat-linear-order]]).
[L3] Natural order is translation-invariant: $x\le y\iff x+z\le y+z$
     ([[lem-nat-order-add-compatible]]).
[L4] By the definition of natural order, $x\le y$ exactly when $y=x+k$ for
     some natural $k$; if $x<y$, such a gap is nonzero ([[def-nat-order]]).
[L5] Natural multiplication is commutative and associative, distributes over
     addition, and has the usual zero and identity laws; multiplication by a
     nonzero natural preserves strict order ([[lem-nat-mult-commutative]],
     [[lem-nat-mult-associative]], [[lem-nat-mult-distributive]],
     [[lem-nat-mult-identity]], [[lem-nat-order-mult-compatible]]).
```

Old representative-independence conclusion:

```text
... cancelling $(a+d)$ gives $a' + d' \le b' + c'$: the relation is
independent of representatives.
```

Corrected conclusion:

```text
... cancelling $(a+d)$ gives $a'+d'\le b'+c'$. Applying the same argument with
primed and unprimed representatives exchanged proves the converse implication,
so the relation is independent of representatives.
```

Old positive-product step:

```text
Since $km \ge 1$, $ad + bc < ac + bd$, which is $0 < xy$.
```

Corrected step:

```text
Since $k,m$ are nonzero, $0<k$ and $0<m$ by [L4]. Hence [L5] gives
$0=0\cdot m<km$, and step 3.2 yields $ad+bc<ac+bd$, which is $0<xy$.
```

Old final step before the citation-only follow-up:

```text
The order is well defined, total, compatible with addition, and positives are
closed under multiplication: $\mathbb{Z}$ is a totally ordered commutative ring.
```

Corrected citation and final step:

```text
[L6] The integer operations make $\mathbb{Z}$ a commutative ring with
multiplicative identity ([[thm-int-comm-ring]]).

The order is well defined, total, compatible with addition, and positives are
closed under multiplication; together with [L6], this makes $\mathbb{Z}$ a
totally ordered commutative ring.
```

All A-label proof tags were correspondingly replaced by the exact L1--L5
sources, and the final step now cites L6.

### Elementary/source basis and provenance

The dependency repair cites the exact published source Statements for natural
linear order, translation invariance, additive-gap order, multiplication laws,
and strict-order compatibility. The converse representative check is the same
elementary calculation with the primed and unprimed representatives exchanged.
The final ring-structure clause is exactly the Statement of
`thm-int-comm-ring`.

Statement and proof provenance both remain `ai-altered`. Neither label was
changed by this closure step.

### Independent certification, impact, and exact fresh pair

Spine Refuter B independently read the full current proof and the full current
`thm-int-comm-ring` proof and exact Statement. The reader certified that L6 is
faithful, step 5.1 is fully licensed, the Statement is unchanged, and no cycle
or new defect was introduced.

The impact receipt computes 1,983 logical consumers, including 88 direct
citation consumers. Every affected consumer is disposed `still-licensed`
because the Statement and dependency interface were not weakened.

The final exact post-repair pair at context
`327ec667805e068c0ad31d6f0b4243907c881fe30f315d9c81d36c11fafb84a1`
was:

- DeepSeek V4 Pro: `keep: true`, 2026-08-02T18:10:17.252Z.
- GPT-5.6 Terra: `keep: false`, 2026-08-02T18:06:06.878Z, alleging that the
  second conventional transitivity premise was undischarged.
- Alpha exact-hash adjudication: `false_positive`. Step 1.5 itself introduces
  both premises, `x <= y` and `y <= z`; no hypothesis is undischarged.

No further mathematical edit or paired call was warranted. The certification
block added on 2026-08-03 is frontmatter-only and does not change the
mathematical audit body; by the owner's no-waste instruction it does not
warrant another paired call. The post-metadata prompt attestation is
`7ec86d9643cf17b6f73756b22b6d5d80315ad73c14489325da411e58d3b20ead`.
