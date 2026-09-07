---
id: prop-isomorphism-invariance-of-satisfaction
kind: proposition
title: "Isomorphisms preserve satisfaction"
status: draft
origin: pipeline
deps: ["thm-set-structure-satisfaction-recursion", "def-set-structures-and-variable-assignments"]
provenance:
  statement: ai-altered
  proof: ai-generated
proof_strategy: direct
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-07
sources:
  references:
    - title: "Moschovakis, Lecture Notes in Logic (2014) \u2014 1C.12(a)\u2013(c), p.14."
      url: "https://www.math.ucla.edu/~ynm/lectures/lnl.pdf"
---

## Statement

For any homomorphism $h:\mathcal M\to\mathcal N$, term $t$ and assignment $s$, $\llbracket t\rrbracket^{\mathcal N}_{h\circ s}=h(\llbracket t\rrbracket^{\mathcal M}_s)$. If $h$ is a surjective strong homomorphism, then $\mathcal M,s\models\phi$ iff $\mathcal N,h\circ s\models\phi$ for every equality-free formula $\phi$. If $h$ is an isomorphism, the equivalence holds for all formulas, including equality.

## Facts & Assumptions

**Given:** Work in ZF unless the statement explicitly weakens or supplements it; fix the objects and hypotheses of the statement.

[F1] For every set signature $L$ and $L$-structure $\mathcal M$ there is a unique set $\operatorname{Sat}_{\mathcal M}\subseteq\operatorname{Form}_L\times M^\omega$. Writing $\mathcal M,s\models\phi$ for membership, its clauses are $$\mathcal M,s\models u=v\iff\llbracket u\rrbracket_s=\llbracket v\rrbracket_s,$$ $$\mathcal M,s\models R(t_1,\ldots,t_n)\iff(\llbracket t_1\rrbracket_s,\ldots,\llbracket t_n\rrbracket_s)\in R^{\mathcal M},$$ $$\mathcal M,s\models\neg\phi\iff\text{not }\mathcal M,s\models\phi,$$ $$\mathcal M,s\models\phi\land\psi\iff(\mathcal M,s\models\phi\text{ and }\mathcal M,s\models\psi),$$ $$\mathcal M,s\models\exists x\phi\iff\exists b\in M\ (\mathcal M,s[x:=b]\models\phi).$$ The set is uniformly first-order definable from $L$ and the structure data. ([[thm-set-structure-satisfaction-recursion]])

[F2] An $L$-structure $\mathcal M$ has a nonempty set carrier $M$, values $c^{\mathcal M}\in M$, total functions $f^{\mathcal M}:M^{a(f)}\to M$, and relations $R^{\mathcal M}\subseteq M^{a(R)}$, supplied as set-indexed interpretation data. Logical equality is literal equality on $M$. An assignment is a function $s:\omega\to M$, also written $s(v_i)=s(i)$. The update $s[x:=b]$ changes only the value at variable $x$ to $b\in M$. For structures in the same signature a homomorphism $h:M\to N$ preserves constants and function values and takes related tuples to related tuples. It is strong if it also reflects every nonlogical relation. An embedding is an injective strong homomorphism; an isomorphism is a surjective embedding. A substructure has a nonempty subcarrier containing all constants, closed under all functions, with functions and relations restricted from the larger structure. A reduct keeps the carrier and only the interpretations for a smaller signature; an expansion is the reverse relationship. All finite powers and the assignment set $M^\omega$ are sets. Conventions and prerequisites: def-set-signature-and-finite-syntax-strings. ([[def-set-structures-and-variable-assignments]])

## Proof

1.1 For variables the term identity is the definition of composition; for constants it is preservation of constants. For a function application, use the identities for its arguments and preservation of that function. Constructor induction proves the term claim. [F2]

2.1 The term identity and strong preservation give equivalence for relation atoms. For equality atoms, the term identity gives the forward direction; injectivity gives the reverse direction when $h$ is an isomorphism. Negation and conjunction preserve these equivalences. [F1, F2, step 1.1]

3.1 A witness $a\in M$ is sent to $h(a)\in N$, and $h\circ(s[x:=a])=(h\circ s)[x:=h(a)]$. Conversely, for a witness $b\in N$, surjectivity supplies one $a$ with $h(a)=b$. The induction hypothesis on the quantified body then transfers witnesses in both directions. Thus formula induction proves both asserted scopes, with injectivity needed precisely for equality. [F1, F2, step 2.1] ∎

