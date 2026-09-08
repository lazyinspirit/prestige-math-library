---
id: lem-countable-henkin-syntax-coding
kind: lemma
title: "Canonical natural-number codes for countable Henkin syntax"
status: published
origin: pipeline
deps: [def-set-signature-and-finite-syntax-strings, def-set-coded-terms-and-formulas, thm-n-cross-n-countable, thm-recursion, def-set-coded-formal-derivation]
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  audited: 2026-09-09
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-08
sources:
  references:
    - title: "Moschovakis, Lecture Notes in Logic (2014), Lemma 1I.4, Sublemma 1 and proof, printed pp.40–41; explicit uniform pairing codes supplied locally."
      url: https://www.math.ucla.edu/~ynm/lectures/lnl.pdf
justified_by: []
forward_refs: []
proof_strategy: direct
---

## Statement

In ZF, given an explicit injection of a set signature's nonlogical symbols into $\omega$, its alphabet, terms, formulas and finite formula lists have explicit injections into $\omega$. The same holds uniformly for the staged Henkin expansions with constants tagged by stage and formula code, and for their union. Finite annotated formal proofs also have an explicit injection into $\omega$; any specified set of such proofs inherits its restriction. The sentences of each such language have an exhaustive $\omega$-sequence, with repetitions allowed. No decidability of a theory or of its set of proofs is asserted.

## Facts & Assumptions

**Given:** An injection $q$ of the original nonlogical symbols into $\omega$; all syntax uses the published finite-word encoding.

[F1] A signature alphabet is the tagged union of its symbol sets, countably many variables, finitely many constructor and punctuation tokens; words are functions from a natural number into that alphabet. ([[def-set-signature-and-finite-syntax-strings]])

[F2] Terms and formulas are particular finite words built by the stated constructors. ([[def-set-coded-terms-and-formulas]])

[F3] There is an explicit pairing bijection $p:\omega^2\to\omega$, namely $p(a,b)=2^a(2b+1)-1$. ([[thm-n-cross-n-countable]])

[F4] Natural recursion on a set with a specified initial element and total successor operation gives a unique sequence. ([[thm-recursion]])

[F5] Formal derivations are finite lists whose lines include formulas, assumption/axiom/rule tags, earlier line indices, rule parameters and finite substitution data. ([[def-set-coded-formal-derivation]])

## Proof

1.1 Assign each original symbol a code $p(0,q(s))$, each variable $v_i$ the code $p(1,i)$, each of the finitely many distinct logical or punctuation tokens a distinct code $p(2,j)$, and the seed constant code $p(3,0)$. Reserve $p(4,p(n,k))$ for the possible witness constant $c_{n,k}$ introduced at stage $n$ for formula code $k$. Injectivity of $p$ and $q$ separates every tag and every entry within a tag. Thus even the set of all possible such constants, before selecting those actually used, has a fixed joint alphabet injection. [F1, F3]

2.1 For a finite list of natural numbers define $r(\varnothing)=0$ and $r(a_0,\ldots,a_n)=p(r(a_0,\ldots,a_{n-1}),a_n)$. Use recursion for each finite list, or the corresponding recursion on finite sequences. Encode a list $\bar a$ of length $n$ by $p(n,r(\bar a))$. Equal codes imply equal lengths by F3. Inducting on that common length, equality of the last paired values gives equality of the last entries and of the prefix values; the induction hypothesis recovers the prefixes. For length zero both lists are empty. Hence this is an explicit injection on all finite lists. Composing with the alphabet code of step 1.1 gives an injection on all words and thus on terms and formulas by F2. [F2, F3, F4, step 1.1]

3.1 Starting with the original symbols and seed, at stage $n$ assign the fresh constant $c_{n,k}$ to each existential sentence of the current language whose word code is $k$. These are distinct because the word code is injective, and no such constant occurred earlier because its stage tag is fresh. The successor operation is definable on the set of subsets of the possible tagged alphabet together with the natural stage, so F4 gives all finite stages. Each embeds into the same alphabet of step 1.1, as does their union. A finite expression in the union uses finitely many symbols and therefore lies in some stage. A finite list of formulas is coded by applying step 2.1 again to their word codes. For annotated proofs, first encode the finitely many annotation types by distinct natural tags. All their fields are natural line indices, variables, terms, formulas, or finite lists of these, including the finite Boolean templates and substitution lists for axiom instances. Tag each field by its type and apply the list injection of step 2.1 to its component codes; applying the same construction to each line record and then the finite list of line records gives an injection on annotated proofs. The tags and list lengths recover the record structure, and injectivity at each field recovers every annotation as well as every formula. Restrict this injection to any specified proof set; no test deciding validity or membership is needed. [F1, F2, F4, F5, step 1.1, step 2.1]

4.1 The sentence $\sigma_*:=\exists v_0(v_0=v_0)$ is available in every one of these languages, even with no nonlogical symbols. For a fixed stage or the union, let $e$ be its sentence-code injection. Define $\sigma_n$ to be the unique sentence of code $n$ when one exists, and $\sigma_*$ otherwise. Separation and Replacement give this sequence; its definition may test membership in a set and need not be computable. Every sentence $\sigma$ occurs at index $e(\sigma)$. Thus the sequence is exhaustive and uses no choice of enumerations of unspecified countable sets. [F2, step 2.1, step 3.1] ∎
