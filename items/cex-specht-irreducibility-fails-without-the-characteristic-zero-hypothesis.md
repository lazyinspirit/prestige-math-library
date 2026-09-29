---
id: cex-specht-irreducibility-fails-without-the-characteristic-zero-hypothesis
kind: counterexample
title: A reducible Specht module in characteristic two
status: draft
origin: pipeline
pipeline_run: frontier-36-complete
deps: [def-young-subgroup-tabloid-and-permutation-module, def-row-and-column-stabilizers-of-a-tableau, def-column-antisymmetrizer-polytabloid-and-specht-module, thm-sign-is-a-homomorphism, def-finite-dimensional-representation-of-a-group-over-a-field, def-subrepresentation-and-irreducible-representation]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  scraped: []
  references:
    - title: "Charlotte Chan, Representation Theory of Symmetric Groups, Remark 4.6, printed p. 16 (modular warning; the concrete F_2 example is computed here)"
      url: "https://web.math.princeton.edu/~charchan/RepresentationTheorySymmetricGroupsNotes.pdf"
    - title: "Mark Wildon, Representation Theory of the Symmetric Group, Examples 2.3(2) and 2.6(B), printed pp. 5-6 (hook-shape tabloids and polytabloids over a field; the reducibility witness is computed here)"
      url: "https://www.ma.rhul.ac.uk/~uvah099/Maths/Sym/SymGroup2014.pdf"
verification:
  precheck: pass
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-29
---

## Statement refuted

If the signed column-antisymmetrizer construction is made over any field, then
every resulting Specht module is irreducible.

## Facts & Assumptions

**Given:** Let $K=\mathbb F_2$ and $\lambda=(3,1)$. Let $v_i$ be the
$(3,1)$-tabloid whose singleton second row is $i$, for $1\le i\le4$. Put
$V=\bigoplus_{i=1}^4 K v_i$, with $S_4$ acting by $\sigma v_i=v_{\sigma(i)}$.
Define the modular polytabloid directly by reducing each coefficient
$\operatorname{sgn}(\gamma)\in\{1,-1\}$ to $K$ in
$e_t=\sum_{\gamma\in C_t}\overline{\operatorname{sgn}(\gamma)}\,\gamma\cdot\{t\}$,
and let $S^{(3,1)}_K$ be the span of these vectors over all tableaux $t$.

[F1] A tabloid is a row-equivalence class, tabloids form the permutation-module
basis, and $S_n$ acts by relabelling entries ([[def-young-subgroup-tabloid-and-permutation-module]]).

[F2] The column stabilizer consists of permutations preserving each column set
([[def-row-and-column-stabilizers-of-a-tableau]]).

[F3] The signed column sum is $\kappa_t=\sum_{\gamma\in C_t}\operatorname{sgn}(\gamma)\gamma$
and the polytabloid is $e_t=\kappa_t\cdot\{t\}$
([[def-column-antisymmetrizer-polytabloid-and-specht-module]]).

[F4] The sign takes values in $\{1,-1\}$ ([[thm-sign-is-a-homomorphism]]).

[F5] A finite-dimensional representation is a finite-dimensional vector
space with a group homomorphism to its group of invertible linear maps
([[def-finite-dimensional-representation-of-a-group-over-a-field]]).

[F6] A subrepresentation is an invariant linear subspace, and an irreducible
representation has no proper nonzero subrepresentation
([[def-subrepresentation-and-irreducible-representation]]).

## Counterexample

**Proof technique:** direct.

1.1 Every tableau of shape $(3,1)$ has a first column of size two and two singleton columns; if its bottom entry is $i$ and the entry above it is $j$, then [F2] gives $C_t=\{1,(ij)\}$. Its tabloid is $v_i$, and $(ij)\cdot v_i=v_j$. By [F3] and [F4], both signs reduce to $1$ in $K$ because $1=-1$ in $\mathbb F_2$, so $e_t=v_i+v_j$. Thus all polytabloids lie in $W:=\ker\epsilon$, where $\epsilon(\sum_i a_i v_i)=\sum_i a_i$. [given, F1, F2, F3, F4, algebra]

2.1 The tableaux with top rows $[4,2,3]$, $[4,1,3]$, $[4,1,2]$ and respective bottom entries $1,2,3$ give $b_1=v_1+v_4$, $b_2=v_2+v_4$, $b_3=v_3+v_4$. These vectors are independent by their first three coordinates. If $x=\sum_i a_i v_i\in W$, then $a_4=a_1+a_2+a_3$, so $x=a_1b_1+a_2b_2+a_3b_3$. Therefore $W$ has basis $b_1,b_2,b_3$, and since each is a polytabloid while every polytabloid lies in $W$, $S^{(3,1)}_K=W$. [given, F1, F2, F3, F4, step 1.1, algebra]

3.1 The vector $w=v_1+v_2+v_3+v_4$ is nonzero, has $\epsilon(w)=4=0$ in $K$, and is fixed by every permutation in $S_4$. Hence $Kw$ is a nonzero subrepresentation of $S^{(3,1)}_K$ by [F5] and [F6]. It is proper because $S^{(3,1)}_K=W$ has the three-element basis from step 2.1, whereas $Kw$ has dimension one. Thus this Specht module is reducible, refuting the claimed field-independent irreducibility. [given, F1, F5, F6, step 2.1, algebra] ∎
