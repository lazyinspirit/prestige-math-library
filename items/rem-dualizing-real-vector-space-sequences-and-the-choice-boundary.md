---
id: "rem-dualizing-real-vector-space-sequences-and-the-choice-boundary"
kind: "remark"
title: "Dualizing real vector-space sequences and the choice boundary"
deps: ["def-axiom-of-choice", "thm-every-independent-set-extends-to-a-basis", "def-dependent-choice", "thm-baire-category-for-complete-metric-spaces", "lem-canonical-extension-by-zero-of-a-singular-cochain-on-a-simplex-basis"]
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-11
sources:
  references:
    - title: "DG-16 design; Hatcher/Park control"
      url: "https://pi.math.cornell.edu/~hatcher/AT/AT.pdf"
      locator: "DG-16 false-statement inventory; exact refutation or unresolved wording recorded in proof_plan"
status: published
origin: "pipeline"
proof_strategy: "direct"
---

## Statement

Write $V^*=\operatorname{Hom}_{\mathbb R}(V,\mathbb R)$ for the algebraic real dual. Two separate axiom branches clarify the exactness issue.

* Under AC, every short exact sequence of real vector spaces   $0\to A\xrightarrow{i}B\xrightarrow{q}D\to0$ dualizes to the short exact   sequence $0\to D^*\xrightarrow{q^*}B^*\xrightarrow{i^*}A^*\to0$. * Under ZF + DC and the additional hypothesis that **every subset of   $P=\mathbb R^{\mathbb N}$ has the Baire property in its product topology**,   let $E=\mathbb R^{(\mathbb N)}\subset P$ be the finitely supported   sequences. The functional $\ell:E\to\mathbb R$ given by   $\ell(x)=\sum_n x_n$ does not extend linearly to $P$. Consequently   $0\to E\to P\to P/E\to0$ does not remain exact at $E^*$ after real   dualization.

These are conditional assertions, not a consistency or nonprovability theorem for ZF. AC is not assumed in the second branch. The canonical extension of values on a supplied simplex basis is a different, choice-free construction.

## Facts & Assumptions

**Given:** The objects and separate axiom branches of the statement.

[F1] Under AC, a linearly independent subset of a real vector space extends to a basis; taking the empty subset also produces a basis ([[thm-every-independent-set-extends-to-a-basis]], [[def-axiom-of-choice]]).

[F2] Under DC, a nonempty complete metric space has dense intersection of every sequence of open dense sets ([[thm-baire-category-for-complete-metric-spaces]], [[def-dependent-choice]]).

[F4] DC supplies a sequence starting at a specified element of a nonempty set whenever the successor relation is entire ([[def-dependent-choice]]).

[F3] Extending a cochain by its prescribed values on the subspace-simplex basis and by zero on the remaining supplied simplices requires no choice ([[lem-canonical-extension-by-zero-of-a-singular-cochain-on-a-simplex-basis]]).

Here a set is **nowhere dense** if its closure has empty interior, **meager** if it is contained in a countable union of nowhere dense sets, and has the **Baire property** if its symmetric difference with some open set is meager. The additional Baire-property hypothesis concerns $P$ itself; no theorem transferring such a hypothesis from another space is used.

## Proof

1.1 Assume AC. For a subspace $A\subset B$, apply [F1] to the empty independent set in $A$ to obtain a basis $S$, and then to $S\subset B$ to obtain a basis $T$ of $B$ containing $S$. If $a\in A^*$, assign value $a(s)$ at $s\in S$ and value zero at $t\in T\setminus S$. A vector of $B$ has a unique finite expression in $T$, so the corresponding finite sum defines a real-linear functional $b$ on $B$. For a vector in $A$, its expression in $S$ is also its expression in $T$, and hence $b|_A=a$. These two basis constructions are the exact AC use. If $A=0$, take the zero extension directly; if $A=B$, take $b=a$. [F1]

2.1 For an arbitrary short exact sequence as stated, transport a functional on $A$ to the subspace $i(A)$ using the inverse of the injective map $i$, and apply step 1.1. Thus $i^*$ is surjective. Since $q$ is surjective, $f\circ q=0$ implies $f=0$, so $q^*$ is injective. The composite $i^*q^*$ is zero since $qi=0$. Conversely, if $b\circ i=0$, define $\bar b(d)=b(x)$ for any $x$ with $q(x)=d$. Such an $x$ exists; two choices differ by an element of $\ker q=i(A)$ on which $b$ vanishes. This uniquely specifies $\bar b$ without selecting lifts. It is linear by applying $b$ to sums and scalar multiples of any lifts, and $q^*\bar b=b$. Hence $\ker i^*=\operatorname{im}q^*$. Only the surjectivity argument used AC. This also covers $B=0$ and the endpoint cases $A=0$ or $D=0$. [step 1.1]

3.1 In contrast to the AC conclusion of step 2.1, for the second branch assume only ZF + DC and the stated Baire-property hypothesis. On $P$ use the metric $$d(x,y)=\sum_{n\ge0}2^{-n-1}\min(1,|x_n-y_n|).$$ The triangle inequality follows termwise from that of $\min(1,|s-t|)$; positivity and symmetry are immediate. This metric induces the product topology. Indeed a sufficiently small metric ball forces any prescribed finite set of coordinate inequalities, by the individual positive weights. Conversely a small restriction on finitely many initial coordinates makes the corresponding partial sum small, while the geometric tail is arbitrarily small. A metric Cauchy sequence is Cauchy in each real coordinate, so let $x_n$ be its unique coordinate limit. These unique limits define $x\in P$. For any $\epsilon>0$, bound the geometric tail by $\epsilon/2$ and use convergence in the finitely many initial coordinates for the remaining $\epsilon/2$. This proves convergence to $x$ in $d$, so $P$ is complete. It is nonempty, containing the zero sequence. By [F2], no nonempty open subset of $P$ is meager: replace the nowhere dense sets by their closed closures and intersect their open dense complements with that open subset. [F2, step 2.1]

4.1 We will use the fact that a countable union of meager sets is meager under DC, and spell out its selection cost. If $M_j$ is meager, let $\mathcal W_j$ be the nonempty set of sequences of nowhere dense subsets covering $M_j$. The set of finite tuples $(w_0,\ldots,w_{k-1})$ with $w_j\in\mathcal W_j$ contains the empty tuple, and extension by one more coordinate is an entire relation: for that one index a witness exists. DC starting at the empty tuple produces a chain of such extensions. Its union gives one $w_j$ for every $j$. A fixed enumeration of $\mathbb N\times\mathbb N$ now gives a single sequence of nowhere dense sets covering $\bigcup_jM_j$. This is the only countable family of meagerness witnesses selected below. [F4, step 3.1]

5.1 Let $L:P\to\mathbb R$ be any algebraic linear functional. The sets $A_m=\{x:|L(x)|\le m\}$ for integers $m\ge1$ cover $P$. By steps 3.1 and 4.1, some $A_m$ is nonmeager. By the Baire-property hypothesis there are an open set $O$ and a meager set $N$ with $A_m\mathbin\triangle O \subseteq N$. The set $O$ is nonempty, since otherwise $A_m$ is meager. Take $a\in O$ and a symmetric open neighborhood $V$ of zero with $a+V+V\subseteq O$; such a $V$ is obtained by shrinking the finitely many coordinate intervals of a basic neighborhood at $a$. For $t\in V$, the nonempty open set $a+V$ lies in both $O$ and $O-t$. Translations preserve nowhere density and meagerness since they are homeomorphisms. Hence $N\cup(N-t)$ is meager and cannot cover $a+V$. There is therefore $b\in(a+V)\setminus(N\cup(N-t))$. Then $b,b+t\in A_m$, giving $|L(t)|=|L(b+t)-L(b)|\le2m$. This proves that $L$ is bounded on $V$. For each $\epsilon>0$, choose an integer $k>2m/\epsilon$; on the open neighborhood $k^{-1}V$ its absolute value is less than $\epsilon$. Thus $L$ is continuous. No $b$ is chosen simultaneously for all $t$; the argument proves the bound separately for each $t$. [step 3.1, step 4.1]

6.1 Continuity supplies a basic product neighborhood $W$ of zero on which $|L|<1$. Let $F\subset\mathbb N$ be the finite set of coordinates restricted by $W$. If $y$ vanishes on $F$, then $ry\in W$ for every real $r$, so $|rL(y)|<1$ for every $r$, which forces $L(y)=0$. In particular, if $e_n$ is the sequence with its only nonzero coordinate equal to one at $n$, then $L(e_n)=0$ for all $n\notin F$. But the well-defined finite-sum functional $\ell:E\to\mathbb R$ satisfies $\ell(e_n)=1$ for every $n$. The least integer outside $F$ supplies a contradiction to $L|_E=\ell$. Thus restriction $P^*\to E^*$ is not surjective. The inclusion and quotient give an exact sequence $0\to E\to P\to P/E\to0$ in ZF, so this is the claimed failure of exactness after dualization. [step 5.1]

7.1 In this witness $E$ is nonzero because $e_0\in E$ is nonzero, and $P/E$ is nonzero because the constant-one sequence has infinite support. No quotient representatives are chosen to define the sequence. The zero functional always extends, but the explicitly given $\ell$ does not in this branch. The functional $\ell$ is well-defined on vectors with any finite support, including empty support, and no sign or order of summation is ambiguous because each sum is finite. The supplied-simplex construction in [F3] instead already has a containing basis, so its zero extension does not call on step 1.1 or on either additional axiom of this second branch. [F3, step 1.1, step 6.1] ∎
