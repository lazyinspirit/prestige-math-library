---
id: "lem-composition-of-roofs-is-well-defined"
kind: "lemma"
title: "Composition of roofs is well defined"
deps: ["lem-roof-equivalence-is-an-equivalence-relation", "def-multiplicative-system-in-a-category"]
verification:
  audited: 2026-09-07
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-07
sources:
  references:
    - url: "https://math.mit.edu/~hrm/palestine/weibel/10-derived_category.pdf"
      title: "10.3.1–10.3.14, pp. 379–384"
provenance:
  statement: ai-altered
  proof: ai-altered
status: published
origin: "pipeline"
proof_strategy: "direct"
---

## Statement

Given roofs $(s:U\to X,f:U\to Y)$ and $(t:V\to Y,g:V\to Z)$, choose $a:W\to U$ in $S$, $b:W\to V$ with $fa=tb$. Their composite is the class of $(sa,gb)$. This is independent of both representatives and of the Ore square, is associative, and has identity roof $(1_X,1_X)$.

## Facts & Assumptions

**Given:** Given roofs $(s:U\to X,f:U\to Y)$ and $(t:V\to Y,g:V\to Z)$, choose $a:W\to U$ in $S$, $b:W\to V$ with $fa=tb$. Their composite is the class of $(sa,gb)$. This is independent of both representatives and of the Ore square, is associative, and has identity roof $(1_X,1_X)$.

[F1] Common refinement of roofs is an equivalence relation ([[lem-roof-equivalence-is-an-equivalence-relation]]).

[F2] Ore squares have a specified leg in $S$, and post-denominator equality can be cancelled after precomposition by a member of $S$ ([[def-multiplicative-system-in-a-category]]).

## Proof

1.1 Ore supplies $a,b$ of the indicated types and $sa\in S$. To compare any two candidate squares, it is enough to give a common refinement of their output roofs; common refinement is an equivalence relation. [F1, F2]

1.2 First replace $(s,f)$ by a refinement $(sr,fr)$, where $sr\in S$. Compare squares $fa=tb$ and $fr a'=tb'$, with $a,a'\in S$. Apply Ore to the denominators $sa$ and $sr a'$ to obtain $v\in S,w$ with $sa v=sr a'w\in S$. Cancel $s$ by a further $e\in S$ to obtain $av e=ra'w e$, then cancel $t$ by $k\in S$ to obtain $bv e k=b'w e k$. Thus the two composite roofs have equal numerator and denominator after refinement, with common denominator $sa v e k\in S$. Taking $r=1$ proves independence of the square as well. [F2, algebra]

2.1 Next refine the second roof to $(tr,gr)$, where $tr\in S$. Compare $fa=tb$ and $fa'=tr b'$. Ore gives $v\in S,w$ with $av=a'w\in S$. Cancellation of $t$ in $tbv=trb'w$ gives $e\in S$ with $bv e=rb'w e$. Hence the composites have equal numerator $gbv e=grb'w e$ and common denominator $sa v e\in S$. Arbitrary equivalent representatives share a refinement, so these two refinement checks and transitivity prove full representative independence. [F1, F2, step 1.2, algebra]

3.1 For a third roof $(u:T\to Z,h:T\to R)$ choose $fa=tb$ as above and $ge=uk$ with $e\in S$. Ore applied to $b:W\to V$ and $e$ gives $i\in S,j$ with $bi=ej$. Then $gbi=ukj$ and $fai=te j$. The two bracketings can therefore both be computed as $(sai,hkj)$. Independence of square choices proves associativity for all choices. [F2, step 1.2, step 2.1, algebra]

4.1 Composing with an identity roof on the target uses $a=1,b=f$; composing with an identity roof on the source uses $a=s,b=1$. Both recover $(s,f)$ exactly. Thus the operation has both identity laws, including when $s$ itself is an identity. [given, algebra] ∎
