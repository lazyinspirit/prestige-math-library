---
id: "thm-conormal-exact-sequence-algebra"
kind: "theorem"
title: "Conormal exact sequence for an algebra quotient"
status: published
origin: "pipeline"
deps: ["thm-kahler-differentials-existence-presentation", "cor-derivations-represented-by-differentials", "thm-right-exactness-of-tensor-products", "def-derivation-algebra"]
proof_strategy: "direct"
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Stacks Algebra 10.131.9"
      url: "https://stacks.math.columbia.edu/download/algebra.pdf"
    - title: "Vakil 22.2.12, pp.579–580"
      url: "https://math.stanford.edu/~vakil/216blog/FOAGaug2922public.pdf"
verification:
  audited: 2026-09-27
---

## Statement

Let $A\to P$ be a homomorphism of commutative rings, let $I\subseteq P$ be an
ideal and let $B=P/I$, with quotient map $\pi\colon P\to B$. Then the sequence
of $B$-modules

$$I/I^{2}\longrightarrow B\otimes_{P}\Omega_{P/A}\longrightarrow\Omega_{B/A}\longrightarrow0$$

is exact, where $I/I^{2}$ is regarded as a $B$-module and the first map sends
the class of $i\in I$ to $1\otimes\mathrm{d}i$, while the second is induced by
$\mathrm{d}_{P/A}$ and $\pi$. **No injectivity of the first arrow is asserted**;
it fails in general, and the failure is recorded on the examples page.

## Facts & Assumptions

**Given:** A ring homomorphism $A\to P$, an ideal $I\subseteq P$ and the quotient $B=P/I$ with quotient map $\pi$.

[F1] [[cor-derivations-represented-by-differentials]]: for every ring map $R\to S$ with Kähler differential module $(\Omega_{S/R},\mathrm{d})$ and every $S$-module $N$, composition with $\mathrm{d}$ is a natural $S$-module isomorphism $\operatorname{Hom}_S(\Omega_{S/R},N)\cong\operatorname{Der}_R(S,N)$.

[F2] [[thm-kahler-differentials-existence-presentation]]: a Kähler differential module exists for every ring map, $\Omega_{S/R}$ is generated as an $S$-module by the elements $\mathrm{d}s$, and the representability statement of [F1] holds for it.

[F3] [[thm-right-exactness-of-tensor-products]]: if $A'\to B'\to C'\to0$ is an exact sequence of modules over a commutative ring $R$ and $N$ is an $R$-module, then $A'\otimes_RN\to B'\otimes_RN\to C'\otimes_RN\to0$ is exact.

[F4] [[def-derivation-algebra]]: an $A$-derivation is additive, $A$-constant and satisfies the Leibniz rule; $\operatorname{Der}_A(S,N)$ is an $S$-module under pointwise operations.

## Proof

1.1 The second map exists and is surjective. Regard $\Omega_{B/A}$ as a $P$-module along $\pi$. The composite $P\xrightarrow{\pi}B\xrightarrow{\mathrm{d}_{B/A}}\Omega_{B/A}$ is an $A$-derivation of $P$ into $\Omega_{B/A}$: it is additive, kills $A$, and satisfies Leibniz because $\pi$ is a ring map and $\mathrm{d}_{B/A}$ is a derivation. By [F1] it corresponds to a $P$-linear map $u\colon\Omega_{P/A}\to\Omega_{B/A}$ with $u(\mathrm{d}p)=\mathrm{d}_{B/A}(\pi(p))$. For $i\in I$ we have $u(\mathrm{d}i)=\mathrm{d}_{B/A}(0)=0$, and $P$-linearity gives $u(i\omega)=\pi(i)u(\omega)=0$, so $u$ kills the submodule $I\Omega_{P/A}\subseteq\Omega_{P/A}$. By [F3] applied to $I\to P\to B\to0$ tensored with $\Omega_{P/A}$ we have $B\otimes_{P}\Omega_{P/A}\cong\Omega_{P/A}/I\Omega_{P/A}$, so $u$ induces a $B$-linear map $\beta\colon B\otimes_{P}\Omega_{P/A}\to\Omega_{B/A}$ with $\beta(1\otimes\mathrm{d}p)=\mathrm{d}_{B/A}(\pi(p))$. It is surjective: every $b\in B$ is $\pi(p)$ for some $p\in P$, and the elements $\mathrm{d}_{B/A}(b)$ generate $\Omega_{B/A}$ over $B$ by [F2]. [F1, F2, F3, F4]

1.2 The first map is well defined. The assignment $i\mapsto1\otimes\mathrm{d}i$ defines a $P$-linear map $I\to B\otimes_{P}\Omega_{P/A}$, and it kills $I^{2}$: for $i,j\in I$, $1\otimes\mathrm{d}(ij)=1\otimes(i\,\mathrm{d}j+j\,\mathrm{d}i)=i(1\otimes\mathrm{d}j)+j(1\otimes\mathrm{d}i)=0$ in the $B$-module $B\otimes_{P}\Omega_{P/A}$, because the classes of $i$ and $j$ in $B$ are zero. Hence it induces a $B$-linear map $\alpha\colon I/I^{2}\to B\otimes_{P}\Omega_{P/A}$ with $\alpha([i])=1\otimes\mathrm{d}i$. [F4, algebra]

2.1 The composite vanishes. For $i\in I$, $\beta(\alpha([i]))=\beta(1\otimes\mathrm{d}i)=\mathrm{d}_{B/A}(\pi(i))=\mathrm{d}_{B/A}(0)=0$; thus $\beta$ factors through the cokernel $Q:=\operatorname{coker}\alpha=(B\otimes_{P}\Omega_{P/A})/\alpha(I/I^{2})$, giving a surjective $B$-linear map $\bar\beta\colon Q\to\Omega_{B/A}$. [step 1.1, step 1.2]

3.1 A left inverse for $\bar\beta$. Let $D\colon P\to Q$ send $p$ to the class of $1\otimes\mathrm{d}p$; it is the composite of the $A$-derivation $p\mapsto1\otimes\mathrm{d}p$ with the $B$-linear quotient map, hence an $A$-derivation, and it kills $I$ because the class of $1\otimes\mathrm{d}i$ is $\alpha([i])=0$ for $i\in I$. Since $Q$ is a $B$-module, $D$ is constant on cosets of $I$ and satisfies Leibniz, so it descends to an $A$-derivation $\bar D\colon B\to Q$: any $b$ has a lift $p$, and $\bar D(b):=D(p)$ is well defined because $D$ kills $I$. Applying [F1] to the ring map $A\to B$ gives a $B$-linear map $\ell\colon\Omega_{B/A}\to Q$ with $\ell(\mathrm{d}_{B/A}(b))=\bar D(b)$ for all $b\in B$. [step 2.1, F1, F4]

4.1 $\ell$ is inverse to $\bar\beta$. For $p\in P$ we have $\ell(\bar\beta([1\otimes\mathrm{d}p]))=\ell(\mathrm{d}_{B/A}(\pi(p)))=\bar D(\pi(p))=D(p)=[1\otimes\mathrm{d}p]$, and the classes $[1\otimes\mathrm{d}p]$ generate $Q$ over $B$ because the $\mathrm{d}p$ generate $\Omega_{P/A}$, so $\ell\circ\bar\beta=\mathrm{id}_{Q}$. Conversely, for $b\in B$ with lift $p$, $\bar\beta(\ell(\mathrm{d}_{B/A}(b)))=\bar\beta([1\otimes\mathrm{d}p])=\mathrm{d}_{B/A}(b)$, and the $\mathrm{d}_{B/A}(b)$ generate $\Omega_{B/A}$ by [F2], so $\bar\beta\circ\ell=\mathrm{id}$. Hence $\bar\beta$ is an isomorphism, $\ker\beta=\operatorname{im}\alpha$, and with $\beta$ surjective the displayed sequence is exact. [step 2.1, step 3.1, F2] ∎
