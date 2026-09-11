---
id: lem-kac-moody-chamber-boundary-stabilizers
kind: lemma
title: Dominant representatives, wall stabilizers and terminating reflection descent
status: draft
origin: pipeline
deps: [lem-kac-moody-reduced-words-and-coroot-signs, def-kac-moody-integral-and-dominant-integral-weights, def-simple-reflections-and-the-kac-moody-weyl-group]
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: Kleshchev, Lectures on Infinite Dimensional Lie Algebras, Lemmas3.3.1–3.3.3 and Proposition3.4.1(i)–(iii), pp42–44,47
      url: https://darkwing.uoregon.edu/~klesh/teaching/IDLALN3.pdf
proof_strategy: direct
---

## Statement

An integral Weyl orbit meeting $P^+$ has a unique dominant representative $\eta$. Its stabilizer is exactly
$$\operatorname{Stab}_W(\eta)=\langle s_i:\eta(h_i)=0\rangle.$$
Starting at any weight in this orbit, repeatedly reflecting at any negative simple label terminates at $\eta$. Choosing the least negative-label index gives a deterministic procedure. No assertion is made that every integral Weyl orbit meets $P^+$.

## Facts & Assumptions

**Given:** An integral weight $\lambda=w\eta$ with $\eta\in P^+$ and $w\in W$.

[F1] Real coroots have one sign, $s_i$ permutes the positive coroots other than $h_i$, inversion sets are finite, and $\ell(ws_i)<\ell(w)$ iff $wh_i<0$ ([[lem-kac-moody-reduced-words-and-coroot-signs]]).

[F2] Dominant integral weights pair nonnegatively with each simple coroot ([[def-kac-moody-integral-and-dominant-integral-weights]]).

[F3] Reflection and duality formulas hold by [[def-simple-reflections-and-the-kac-moody-weyl-group]].

## Proof

1.1 For a positive real coroot $\beta$, if $w^{-1}\beta$ is positive then $\lambda(\beta)=\eta(w^{-1}\beta)\geq0$ by F2, since a positive coroot is a nonnegative integral combination of simple coroots. Hence $N(\lambda)=\{\beta>0:\lambda(\beta)<0\}$ is contained in $\operatorname{Inv}(w^{-1})$, and is finite by F1. Each negative-label reflection keeps the weight integral: its new labels are $\lambda(h_j)-\lambda(h_i)a_{ji}$ by F3. It also stays in the same orbit, so finiteness persists. [F1, F2, F3, given]

1.2 Suppose $\eta,\zeta=w\eta$ are both dominant, and take a reduced expression $w=s_{i_1}\cdots s_{i_t}$. We prove by induction on $t$ that $\zeta=\eta$ and this word is a product of zero-label reflections of $\eta$. For $t=0$ both conclusions are immediate. For $t>0$, canceling the last factor gives an expression of length $t-1$ for $ws_{i_t}$, so F1 gives $wh_{i_t}<0$. By duality and dominance, $0\leq\eta(h_{i_t})=\zeta(wh_{i_t})\leq0$. Thus $\eta(h_{i_t})=0$, and F3 gives $s_{i_t}\eta=\eta$. The prefix represents $ws_{i_t}$ and is reduced: a shorter prefix would shorten the original word after appending its last factor. The prefix still sends $\eta$ to $\zeta$, so the induction hypothesis proves both assertions, and the deleted last factor is also a zero-label reflection. [F1, F2, F3, given]

2.1 Suppose $\lambda(h_i)<0$. On positive coroots other than $h_i$, the bijection $\beta\mapsto s_i\beta$ identifies negative pairings for $s_i\lambda$ with those for $\lambda$. The pairing at $h_i$ changes from negative to positive. Thus $|N(s_i\lambda)|=|N(\lambda)|-1$. If no simple label is negative, every positive coroot pairs nonnegatively and the weight belongs to $P^+$ by F2 and integrality. Therefore after at most $|N(\lambda)|$ reflections any such process must stop at a dominant weight: a further negative label would require a negative integer cardinality. Selecting the least negative index specifies each finite step without AC. [F1, F2, F3, step 1.1]

3.1 Step 1.2 proves uniqueness of the dominant endpoint in 2.1. Applying it when $w\eta=\eta$ proves that every stabilizing element belongs to the stated generated subgroup. Conversely, each displayed generator fixes $\eta$ directly by F3, so every product does too. At a strictly positive-label weight the subgroup is trivial; at zero labels nontrivial stabilizers are permitted. If the starting weight is already dominant, $N$ is empty and zero reflections are performed. Empty simple systems have trivial $W$. The zero weight is fixed by every simple reflection, giving stabilizer $W$. No choice axiom or reality assumption on complementary Cartan values was used. [F3, step 2.1, step 1.2] ∎
