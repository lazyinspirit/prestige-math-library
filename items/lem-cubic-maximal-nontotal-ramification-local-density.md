---
id: lem-cubic-maximal-nontotal-ramification-local-density
kind: lemma
title: "Local density of maximal cubic orders without total ramification"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 2
deps:
  - def-axiom-of-choice
  - def-countable-choice
  - thm-delone-faddeev-cubic-rings-and-binary-cubic-forms
  - lem-complete-discrete-valuation-extension-degree-and-tame-norm
  - thm-extensions-of-finite-fields-are-galois-with-cyclic-frobenius-group
  - thm-fundamental-identity-for-primes-in-number-fields
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "Bhargava, Shankar, and Tsimerman, On the Davenport–Heilbronn Theorems and Second-Order Terms"
      url: "https://arxiv.org/pdf/1005.0672"
      locator: "§§3–4, Theorem 14 and Lemmas 17–19, printed pp. 6–9; the congruence and counting proof is reconstructed below."
---

## Statement

Assume AC and Countable Choice. Let $p$ be a prime. For an integral binary cubic $f(x,y)=ax^3+bx^2y+cxy^2+dy^3$ with nonzero discriminant, form its Delone–Faddeev cubic ring $R(f)$ and put $R_p=R(f)\otimes\mathbb Z_p$. If $R_p$ is nonmaximal, it has an overorder of index $p$, or it has an overorder $R_p^{\prime\prime}$ with $R_p=\mathbb Z_p+pR_p^{\prime\prime}$ and index $p^2$. The property that $R_p$ is a maximal order in its étale cubic $\mathbb Q_p$-algebra and has no factor of ramification index $3$ is determined by $f\bmod p^2$. Exactly
$$p^8(1-p^{-2})^2$$
residue classes modulo $p^2$ satisfy the resulting criterion. Thus the local congruence density is $(1-p^{-2})^2$, including $p=2$ and $p=3$. The count is for local coefficient classes and asserts no global orbit-counting asymptotic.

## Facts & Assumptions

**Given:** AC, Countable Choice and a rational prime $p$.

[F1] The Delone–Faddeev ring on basis $1,\omega,\theta$ has products $\omega\theta=-ad$, $\omega^2=-ac-b\omega+a\theta$, and $\theta^2=-bd-d\omega+c\theta$; its ring discriminant is the discriminant of the cubic. The same polynomial multiplication laws hold after base change to $\mathbb Z_p$ or $\mathbb F_p$. [[thm-delone-faddeev-cubic-rings-and-binary-cubic-forms]]

[F2] A finite extension of $\mathbb Q_p$ has a discrete valuation ring of integers finite free over $\mathbb Z_p$, with degree $ef$. Thus the maximal order in an étale cubic algebra is the product of the integer rings of its field factors. [[lem-complete-discrete-valuation-extension-degree-and-tame-norm]] [[thm-fundamental-identity-for-primes-in-number-fields]]

[F3] A repeated root of a nonzero binary cubic over $\mathbb F_p$ is rational: a nonrational repeated root and its distinct Frobenius conjugate would already have total multiplicity at least four. [[thm-extensions-of-finite-fields-are-galois-with-cyclic-frobenius-group]]

[A1] AC and Countable Choice are retained for the local-field and finite-dimensional valuation interfaces used below. [[def-axiom-of-choice]] [[def-countable-choice]]

## Proof

1.1 A cubic $\mathbb Z_p$-order $R$ with nonzero discriminant is nonmaximal exactly when it has a strictly larger cubic order of finite $p$-power index. Choose bases of the two rank-two quotients by $\mathbb Z_p$ in Smith normal form. Normalize the basis of $R$ as in [F1]; this preserves the diagonal overorder presentation because its multiplication closure forces the translation constants to be divisible by the respective powers of $p$. The overorder then has the form $\mathbb Z_p+\mathbb Z_p\omega/p^i+\mathbb Z_p\theta/p^j$ with $i\ge j\ge0$ and $i>0$. The multiplication laws [F1] show this is a ring precisely when $v_p(a)\ge2i-j$, $v_p(b)\ge i$, $v_p(c)\ge j$, and $v_p(d)\ge2j-i$, with nonpositive bounds vacuous. If $j=0$ and $i>1$, replace $i$ by $i-1$; if $j>0$ and $i>1$, replace $(i,j)$ by $(i-1,j-1)$. In either case all four bounds weaken. Repeating reaches $(i,j)=(1,0)$ or $(1,1)$. [A1, F1, F2, given, construct, algebra]

2.1 For $(1,0)$ the ring condition is $a\equiv0\pmod{p^2}$ and $b\equiv0\pmod p$; for $(1,1)$ all four coefficients are divisible by $p$. Conversely either condition constructs the indicated overorder by the same multiplication laws. Since changing a normal basis of $R/\mathbb Z_p$ acts on $f$ through $\operatorname{GL}_2(\mathbb Z_p)$, $R_p$ is nonmaximal exactly when all coefficients are divisible by $p$, or some such change of variables makes $a\equiv0\pmod{p^2}$ and $b\equiv0\pmod p$. This is a condition on $f\bmod p^2$. [F1, step 1.1, algebra]

3.1 Classify nonzero forms modulo $p$ by their roots in $\mathbb P^1(\overline{\mathbb F}_p)$. By [F3], a repeated root is rational. The double-and-single type has an ordered pair of distinct rational points and a nonzero scalar, giving $N_d=(p+1)p(p-1)$ forms. The triple-root type has one rational point and a nonzero scalar, giving $N_t=(p+1)(p-1)$ forms. Every other nonzero form is squarefree. Therefore the number of squarefree forms is $N_s=p^4-1-N_d-N_t=p(p-1)^2(p+1)$. These counts use no division by $2$ or $3$ and remain valid at those primes. [F3, step 2.1, given, construct, algebra]

4.1 A squarefree reduction has discriminant nonzero modulo $p$, so the maximality criterion in step 2.1 holds. Its reduced algebra is a product of finite fields, which has no nilpotents; by [F2] each maximal local factor therefore has ramification index one. A zero reduction fails maximality. In either repeated-root type, move the unique repeated point to $(1:0)$ by a lift from $\operatorname{GL}_2(\mathbb F_p)$; then $a\equiv b\equiv0\pmod p$. The second condition of step 2.1 occurs exactly when $a\equiv0\pmod{p^2}$; it is independent of the chosen lift of the repeated point because its first derivative also vanishes modulo $p$. For each fixed repeated-root reduction, exactly a fraction $(p-1)/p$ of its $p^4$ lifts modulo $p^2$ are maximal. [F1, step 2.1, step 3.1, construct, algebra]

5.1 The reduction algebra for a double-and-single root is $\mathbb F_p\times\mathbb F_p[t]/(t^2)$; for a triple root it is $\mathbb F_p[t]/(t^3)$. This follows directly from [F1] after moving the roots to the coordinate points: representatives $x^2y$ and $x^3$ give the displayed multiplication tables, and nonzero scalar changes only the chosen basis. By [F2], a maximal local order is a product of discrete valuation rings. A reduction with two maximal ideals cannot be totally ramified of degree $3$, whereas the local algebra $\mathbb F_p[t]/(t^3)$ has one residue field of degree $1$ and length $3$, so a maximal lift is totally ramified. Thus among nondegenerate forms the desired property is exactly squarefree reduction, or double-and-single reduction with the maximality condition in step 4.1. [F1, F2, step 3.1, step 4.1, algebra]

6.1 The squarefree reductions contribute $N_s p^4$ classes modulo $p^2$, and the double-and-single reductions contribute $N_d p^3(p-1)$. Dividing their sum by $p^8$ gives $\frac{N_s}{p^4}+\frac{N_d(p-1)}{p^5}=\frac{(p-1)^2(p+1)^2}{p^4}=(1-p^{-2})^2$. The zero and triple-root reductions contribute none by steps 4.1–5.1. The discriminant is a nonzero polynomial in the four coefficients, so every $p^2$ residue class has a lift with nonzero discriminant: a nonzero polynomial cannot vanish on the product of four infinite sets of allowable lifts. Thus this proves both the exact finite congruence count and its interpretation for every nonzero-discriminant form. [step 3.1, step 4.1, step 5.1, algebra] ∎
