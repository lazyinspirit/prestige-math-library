---
id: ex-collapse-chain-maps-need-not-be-inclusions
kind: example
title: "Transporting an elementary-chain map through collapse"
status: published
origin: pipeline
deps: [thm-countable-elementary-submodels-and-transitive-collapses, thm-hartogs, def-axiom-of-choice, cor-elementary-membership-chains-and-collapse-compatibility, lem-collapse-fixes-transitive-parts-and-orders-ordinals]
provenance:
  statement: "ai-altered"
  proof: "ai-altered"
proof_strategy: direct
verification:
  audited: 2026-09-10
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-10
sources:
  references:
    - title: "Geschke, Models of Set Theory — §4 collapse interface pp11–12; published chain theorem"
      url: "https://www.math.uni-hamburg.de/home/geschke/teaching/ModelsSetTheory.pdf"
---


## Example

For collapses $\pi_\alpha:M_\alpha\to\bar M_\alpha$ of an elementary membership chain, the maps are $j_{\alpha\beta}=\pi_\beta\circ\iota_{\alpha\beta}\circ\pi_\alpha^{-1}$. Their action on an ordinal is an order-type embedding, and equality with inclusion is an additional condition. In ZFC the two-stage chain $X\prec V_{\kappa+\omega}$ constructed below gives an explicit failure of inclusion.

## Facts & Assumptions

[F1] [[cor-elementary-membership-chains-and-collapse-compatibility]]: A nonempty set-ordinal elementary chain of actual membership structures satisfying Extensionality has a union elementary over every stage, and the union has a transitive collapse. Conjugating the inclusions by stage and union collapses gives coherent elementary embeddings; these are not asserted to be inclusions of the transitive images.

[F2] [[lem-collapse-fixes-transitive-parts-and-orders-ordinals]]: Let $\pi:X\to\bar X$ be a collapse of actual membership as above. It fixes every transitive subset $A\subseteq X$ pointwise. If $\alpha\in X$ is an actual ordinal, $\pi(\alpha)$ is the order type of $X\cap\alpha$. In particular, if $X\cap\alpha$ is transitive, $\pi(\alpha)=X\cap\alpha$.

[F3] [[thm-countable-elementary-submodels-and-transitive-collapses]]: In ZFC, if an infinite set membership structure $M$ satisfies Extensionality, then for every at most countable $A\subseteq M$ there is a countably infinite $X\prec M$ containing $A$, and $X$ has a countable transitive collapse. To retain a set $a\in M$ as one parameter, use $A=\{a\}$.

[F4] [[thm-hartogs]]: For every set $A$ there is an ordinal (def-ordinal) that does not inject
into $A$, that is, admits no injective function into $A$. The least such
ordinal is the **Hartogs number** $\aleph(A)$, and it is exactly

$$\aleph(A) = \{\mathrm{ot}(S, R) : S \subseteq A \text{ and } R \text{ well-orders } S\},$$

the set of order types (thm-mostowski-collapse) of the well-ordered subsets
of $A$.

**The proof is choice free.** That is the whole point of the theorem: in ZF
alone, with no assumption that $A$ can be well ordered, one still gets an
ordinal too long to be laid inside $A$.

[F5] [[def-axiom-of-choice]]: The **Axiom of Choice** (AC) is the following statement.

> Every family of nonempty sets has a choice function
> (def-choice-function).

Written out: for every set $\mathcal{F}$ all of whose members are nonempty,
there exists a function $g$ with domain $\mathcal{F}$ satisfying $g(S) \in S$ for
all $S \in \mathcal{F}$.

An equivalent formulation is that a product of nonempty sets is nonempty: if
$X_i \ne \emptyset$ for every $i \in I$, then $\prod_{i \in I} X_i \ne \emptyset$.
Here $\prod_{i \in I} X_i$ is the set of functions $f$ with domain $I$ such that
$f(i) \in X_i$ for every $i \in I$; when a family of nonempty sets is indexed by
itself, such an $f$ is precisely a choice function for it.

## Verification

**Given:** A chain and its actual collapse maps, with a named ordinal at an earlier stage; ambient ZFC for the concrete witness.

1.1 For a named actual ordinal $\xi\in M_\alpha$, put $\tau_\alpha=\operatorname{ot}(M_\alpha\cap\xi)$. F2 gives $\pi_\alpha(\xi)=\tau_\alpha$, so direct substitution in F1 yields $j_{\alpha\beta}(\tau_\alpha)=\pi_\beta(\xi)=\operatorname{ot}(M_\beta\cap\xi)=\tau_\beta$. On a predecessor $\eta\in M_\alpha\cap\xi$, its order position $\operatorname{ot}(M_\alpha\cap\eta)$ is sent to $\operatorname{ot}(M_\beta\cap\eta)$. These equalities specify the induced order embedding. [F1, F2, given]

2.1 For three stages the calculation is $j_{\beta\gamma}(j_{\alpha\beta}(u))=\pi_\gamma(\pi_\beta^{-1}(\pi_\beta(\pi_\alpha^{-1}(u))))=\pi_\gamma(\pi_\alpha^{-1}(u))=j_{\alpha\gamma}(u)$, with inclusions understood at the displayed domain changes. For two identical stages this computes the identity. If the named ordinal has $\tau_\alpha\ne\tau_\beta$, step 1.1 moves it, whereas literal inclusion would fix it. Thus inclusion requires additional agreement of collapse values and does not follow from the conjugation formula. [step 1.1, algebra]


3.1 Here is a chain for which the values differ. In ZFC let $\kappa=\aleph(\omega)$ from F4, and put $\theta=\kappa+\omega$. The transitive infinite set $V_\theta$ contains $\kappa$ and satisfies Extensionality: all members of each of its elements remain in its domain, so internal agreement of members is actual agreement. F3, with the singleton parameter set $\{\kappa\}$ and the AC assumption F5, supplies a countable $X\prec V_\theta$ containing $\kappa$. Take the two-stage chain $M_0=X$, $M_1=V_\theta$. F2 makes $\pi_1$ the identity, and gives $\tau=\pi_0(\kappa)=\operatorname{ot}(X\cap\kappa)$. This ordinal injects into $\omega$: compose the inverse order isomorphism with a countable enumeration inverse for X. F4 says $\kappa$ does not inject into $\omega$, so $\tau\ne\kappa$. Step 1.1 now calculates $j_{01}(\tau)=\kappa\ne\tau$. This elementary transported map moves an element of its domain and therefore is not literal inclusion. [F2, F3, F4, F5, step 1.1] ∎
