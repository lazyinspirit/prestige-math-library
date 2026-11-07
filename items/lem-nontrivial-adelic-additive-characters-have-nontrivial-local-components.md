---
dependency_level: 0
id: lem-nontrivial-adelic-additive-characters-have-nontrivial-local-components
kind: lemma
title: "A Nontrivial Adelic Additive Character Has Nontrivial Local Components"
status: draft
origin: pipeline
provenance:
  statement: ai-altered
  proof: ai-generated
deps:
  - lem-number-field-completion-tensor-and-norm-in-zf
  - thm-primitive-element-theorem-for-finite-separable-extensions
proof_strategy: direct
sources:
  references:
    - title: "Keith Conrad, The Character Group of Q, §4, pp. 8–9, and Appendix A"
      url: "https://kconrad.math.uconn.edu/blurbs/gradnumthy/characterQ.pdf"
    - title: "Jürgen Neukirch, Algebraic Number Theory, VI §2, pp. 371–373, especially Exercise 5, adelic scalar extension and trace"
      url: "https://web.math.ucsb.edu/~agboola/teaching/2021/fall/225A/neukirch.pdf"
pipeline_run: number-theory-all-141-2026-10-25
---

## Statement

Let $F$ be a number field, let $\mathbb A_F$ be its adele ring, the restricted product of its completions with respect to the rings of integers at finite places, and let $\psi:\mathbb A_F/F\to S^1$ be a nontrivial continuous additive character. At every place $v$ the character $\psi_v:F_v\to S^1$ obtained by inserting an element in the $v$-coordinate and zeros elsewhere is nontrivial. At every finite place it is locally constant.

## Statement references

[Keith Conrad, *The Character Group of Q*, §4, pp. 8–9, and Appendix A](https://kconrad.math.uconn.edu/blurbs/gradnumthy/characterQ.pdf)

[Jürgen Neukirch, *Algebraic Number Theory*, VI §2, pp. 371–373, especially Exercise 5](https://web.math.ucsb.edu/~agboola/teaching/2021/fall/225A/neukirch.pdf)

## Facts & Assumptions

[F1] [[lem-number-field-completion-tensor-and-norm-in-zf]] proves the finite and archimedean completion tensor decompositions, their coordinate topologies, and compatibility with local trace, in ZF.

[F2] [[thm-primitive-element-theorem-for-finite-separable-extensions]] supplies a primitive element of a number field.

## Proof

**Given:** The number field $F$ and the nontrivial continuous character $\psi$ trivial on its diagonal copy of $F$. All character classifications used below are proved in the argument.

1.1 For a prime $p$, let $\{x\}_p$ be the finite sum of the negative-power digits in the $p$-adic expansion of $x\in\mathbb Q_p$. The function $\epsilon_p(x)=\exp(-2\pi i\{x\}_p)$ is an additive character with kernel $\mathbb Z_p$: the fractional parts of a sum and the sum of fractional parts differ by an integer. Every continuous character $\chi$ of $\mathbb Q_p$ has the form $\epsilon_p(bx)$ for a unique $b\in\mathbb Q_p$. Indeed continuity sends some subgroup $p^N\mathbb Z_p$ into an arc about $1$ containing no nontrivial subgroup of $S^1$, so $\chi$ is trivial there. Such an arc exists because for any $z\ne1$ some integer power of $z$ has nonpositive real part. Put $\chi'(x)=\chi(p^Nx)$. Write $\chi'(p^{-j})=\exp(-2\pi i c_j/p^j)$ with $c_j\in\mathbb Z/p^j\mathbb Z$. The identities $\chi'(p^{-j-1})^p=\chi'(p^{-j})$ give $c_{j+1}\equiv c_j\pmod {p^j}$, hence a unique $c\in\mathbb Z_p$. The formula $\chi'(x)=\epsilon_p(cx)$ holds on $\mathbb Z[1/p]$, by writing its elements as integer multiples of $p^{-j}$, and then on $\mathbb Q_p$ by density and continuity. Thus $b=c/p^N$ works. Uniqueness follows by evaluating at $x=1/(p(b-b'))$ if $b\ne b'$. [given, construct]

1.2 Every continuous character of $\mathbb R$ has the form $x\mapsto\exp(2\pi i tx)$. To verify this without a character-classification premise, choose a small interval on which the character has a continuous argument $\theta$ with $\theta(0)=0$ and $|\theta|<1/6$. For $x,y,x+y$ in that interval, $\theta(x+y)-\theta(x)-\theta(y)$ is an integer of absolute value less than $1/2$, so it is zero. Local additivity and continuity show $\theta(x)=tx$ there, first on rational multiples of a fixed small nonzero argument and then by continuity. Subdivision of any real $x$ into sufficiently small equal pieces gives the same formula globally. Define
$$\epsilon_{\mathbb Q}(x)=\exp(2\pi i x_\infty)\prod_p\epsilon_p(x_p),\qquad x\in\mathbb A_{\mathbb Q}.$$
This is well-defined and continuous since almost every $x_p$ is integral. It is trivial on $\mathbb Q$: for $r\in\mathbb Q$, $r-\sum_p\{r\}_p$ is an integer, since it is integral at every prime. This last assertion follows by subtracting the $p$-fractional part at each prime; terms with other prime-power denominators are $p$-integral. [step 1.1, construct]

1.3 Every continuous character $\eta$ of $\mathbb A_{\mathbb Q}$ has the form $x\mapsto\epsilon_{\mathbb Q}(b x)$ for an adele $b$. Its restrictions to the local coordinates have the forms proved in steps 1.1–1.2. Continuity at zero makes its restriction to $\prod_{p\notin S}\mathbb Z_p$ trivial for a finite set $S$: shrink to a product neighborhood whose image lies in the subgroup-free arc of step 1.1, and restrict to the indicated subgroup. Hence the local parameters $b_p$ lie in $\mathbb Z_p$ outside $S$. Finite-coordinate truncations of a fixed adele converge to it, so continuity expresses $\eta$ as the product of its local restrictions. Now suppose $\eta$ is trivial on $\mathbb Q$. Choose $r=\sum_{p\in S}\{b_p\}_p\in\mathbb Q$; then $b_p-r\in\mathbb Z_p$ for every $p$. Subtracting the diagonal parameter $r$ leaves the same character on $\mathbb Q$. Evaluating at $1$ shows $b_\infty-r\in\mathbb Z$; subtract this integer as well. The remaining parameter $b'$ has $b'_\infty=0$ and every $b'_p$ integral. Evaluation at $1/p^j$ gives $\epsilon_p(b'_p/p^j)=1$, because all other finite components are integral. Thus $b'_p\in p^j\mathbb Z_p$ for every $j$, so $b'_p=0$. Therefore $b$ was diagonal rational. Conversely each diagonal rational parameter is trivial on $\mathbb Q$ by step 1.2. [step 1.1, step 1.2, construct]

1.4 Choose a rational basis $e_1,\ldots,e_d$ of $F$. It gives a topological additive isomorphism $\mathbb A_{\mathbb Q}^d\simeq\mathbb A_F$, $(x_i)\mapsto\sum_i e_ix_i$. The completion tensor decompositions and the agreement of their coordinate and local topologies are F1. Here are the additional restricted-product details. Write $F=\mathbb Q(\alpha)$ using F2, and let its distinct conjugates be the roots of its separable minimal polynomial. The rational basis lattice and $\mathcal O_F$ are commensurable. To see this, scale the basis to integral elements; for integral $x$ its coordinates are bounded-denominator rational numbers, since the integers $\operatorname{Tr}_{F/\mathbb Q}(xe_i)$ determine them by the inverse of the rational trace matrix. The trace matrix is invertible: in a power basis its embedding matrix is Vandermonde on the distinct conjugates of $\alpha$, and its Gram matrix is that matrix transposed times itself. This proves both trace nondegeneracy and the claimed lattice commensurability. Consequently at almost every prime the basis identifies the integral lattices, proving the restricted-product and topology assertion. [F1, F2, step 1.3, construct]

1.5 The $i$-th coordinate restriction of $\psi$ under this isomorphism is a continuous character of $\mathbb A_{\mathbb Q}$ trivial on $\mathbb Q$, so step 1.3 supplies $a_i\in\mathbb Q$. By the trace nondegeneracy just proved there is a unique $a\in F$ with $\operatorname{Tr}_{F/\mathbb Q}(ae_i)=a_i$. Additivity in finitely many coordinates yields
$$\psi(x)=\epsilon_{\mathbb Q}\bigl(\operatorname{Tr}_{\mathbb A_F/\mathbb A_{\mathbb Q}}(a x)\bigr).$$
The trace in this formula is the sum of the ordinary local field traces over the places above each rational place; this follows from F1 and the definition of trace as the trace of multiplication. Nontriviality of $\psi$ implies $a\ne0$. For each $v\mid p$, the map $x\mapsto\operatorname{Tr}_{F_v/\mathbb Q_p}(ax)$ is surjective onto $\mathbb Q_p$: multiplication by $a$ is invertible and the trace is nonzero, since its value at $1$ is the nonzero integer $[F_v:\mathbb Q_p]$. Thus $\psi_v$ is nontrivial, since $\epsilon_p$ is nontrivial. The same argument over $\mathbb R$ treats real and complex places, with complex trace $z\mapsto2\operatorname{Re}(z)$. At finite places the local formula and step 1.1 show local constancy. [F1, step 1.1, step 1.2, step 1.3, step 1.4, construct] ∎
