---
id: lem-formal-full-faithfulness-on-regular-punctured-spectrum
kind: lemma
title: "Vector-bundle maps on a regular punctured spectrum are recovered from parameter thickenings"
status: draft
origin: pipeline
pipeline_run: frontier-38-owner-30
deps:
  - def-axiom-of-choice
  - lem-punctured-hartogs-and-flat-base-change-for-finite-projectives
  - thm-regular-local-rings-are-domains-and-cohen-macaulay
  - lem-regular-local-quotient-by-parameter-is-regular
  - cor-regular-sequences-permutable-local
  - thm-completion-as-extension-of-scalars
  - thm-krull-intersection-theorem
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-03
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "SGA 1, Exposé X §3, purity and its dimension-two discriminant proof"
      url: https://arxiv.org/pdf/math/0206203
    - title: "Stacks Project, Fundamental Groups §§19–21, especially Lemmas 20.7 and 21.3–21.4"
      url: https://stacks.math.columbia.edu/download/pione.pdf
    - title: "Stacks Project, Algebraic and Formal Geometry §15, Lemmas 15.1 and 15.5; regular-case argument expanded here"
      url: https://stacks.math.columbia.edu/download/algebraization.pdf
---

## Statement

Assume AC. Let $(A,\mathfrak m)$ be a complete Noetherian regular local ring of dimension $d\ge3$, let $f\in\mathfrak m\setminus\mathfrak m^2$, and put $U=\operatorname{Spec}A\setminus\{\mathfrak m\}$ and $U_n=U\times_A\operatorname{Spec}(A/f^nA)$. For finite locally free sheaves $E,G$ on $U$, restriction induces a bijection
$$\operatorname{Hom}_U(E,G)\xrightarrow{\sim}\varprojlim_n\operatorname{Hom}_{U_n}(E|_{U_n},G|_{U_n}).$$
In particular compatible isomorphisms on all $U_n$ uniquely extend, including their inverses and any algebra-structure identities.

## Facts & Assumptions

**Given:** AC, $A$, $f$, $U$ and the bundles in the Statement.

[F1] A regular local ring has a regular system of parameters and is Cohen–Macaulay; quotient by a parameter is regular. Parameter sequences are permutable ([[thm-regular-local-rings-are-domains-and-cohen-macaulay]], [[lem-regular-local-quotient-by-parameter-is-regular]], [[cor-regular-sequences-permutable-local]]).

[F2] A depth-two finite module has the punctured Hartogs property ([[lem-punctured-hartogs-and-flat-base-change-for-finite-projectives]]). Finite modules over a complete Noetherian local ring are complete, and separated by Krull intersection ([[thm-completion-as-extension-of-scalars]], [[thm-krull-intersection-theorem]]). AC is inherited through these suppliers ([[def-axiom-of-choice]]).

## Proof

1.1 Extend $f$ to a regular system of parameters $f,x_2,\ldots,x_d$. By [F1], $A$ has depth at least three, while $A/f^nA$ has the regular sequence $x_2,x_3$: this follows by filtering it with the powers of $f$ and using regularity modulo $f$. Thus [F2] gives $\Gamma(U,\mathcal O)=A$ and $\Gamma(U_n,\mathcal O)=A/f^nA$. Also $A$ is complete for the $f$-adic topology. An $f$-adic Cauchy sequence is $\mathfrak m$-adically Cauchy; its limit remains in every prescribed residue class modulo $f^n$, since $A/f^nA$ is a separated complete finite module by [F2]. Injectivity follows from $\bigcap f^nA\subseteq\bigcap\mathfrak m^n=0$. Therefore $A\cong\varprojlim A/f^nA$. [F1, F2, algebra]

1.2 Every finite locally free sheaf $H$ on the quasi-compact open $U$ admits an exact sequence $0\to H\to\mathcal O_U^r\to\mathcal O_U^s$ whose first cokernel is finite locally free. Here are the globalization details. For any quasi-coherent sheaf on $U$, its sections are a finite equalizer over principal affine opens $D(a_i)$ covering $U$ and their affine intersections. Localizing that equalizer shows $\Gamma(U,H)_a=\Gamma(D(a),H)$ for $D(a)\subseteq U$, since localization is flat. Take local bases of $H^*$ on a finite principal cover. Multiply each basis section by a sufficient power of its defining element to make it a global section; the resulting finitely many global sections still span $H^*$ on the corresponding opens, hence give a surjection $\mathcal O_U^r\to H^*$. Its kernel is locally free, since the quotient is locally free and the sequence splits locally. Dualizing gives an injection $H\to\mathcal O_U^r$ with locally free cokernel $K$. Apply the same construction to $K^*$ and dualize to embed $K\to\mathcal O_U^s$. This is the desired sequence, and its restriction to every $U_n$ remains exact because the local splitting makes it universally exact. [construct]

2.1 Taking sections expresses $\Gamma(U,H)$ as the kernel of $A^r\to A^s$ using step 1.1. Similarly $\Gamma(U_n,H|_{U_n})$ is the kernel of $(A/f^nA)^r\to(A/f^nA)^s$. Inverse limits preserve kernels, and the compatible matrices on the right are reductions of the original matrix. Step 1.1 therefore gives $\Gamma(U,H)=\varprojlim\Gamma(U_n,H|_{U_n})$. Apply this to the locally free sheaf $\mathcal Hom(E,G)$ to obtain the claimed bijection. Apply it also to the Hom sheaf in the opposite direction: compatible inverse maps extend, and their compositions are identities because this bijection is injective. Multiplication and unit identities are maps between tensor products of locally free sheaves, so their equality is likewise detected on all $U_n$. [step 1.1, step 1.2, algebra] ∎
