---
id: "prop-the-grothendieck-group-of-o-has-simple-and-standard-bases"
kind: "proposition"
title: "Simple and standard bases of K0(O)"
deps: ["def-grothendieck-group-and-character-of-category-o", "thm-every-category-o-object-has-finite-length", "thm-jordan-holder-theorem-in-an-abelian-category", "cor-central-characters-are-dot-weyl-orbits", "thm-verma-module-has-a-unique-simple-quotient", "prop-weights-of-a-verma-module-lie-below-lambda", "thm-simple-objects-of-category-o-are-highest-weight-modules", "lem-central-action-on-a-cyclic-highest-weight-module-is-scalar"]
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-07
sources:
  references:
    - title: "§6 Theorem 6.2(4) and proof, p.10"
      url: "https://math.jhu.edu/~sakellar/automorphic-files/vermamodules.pdf"
provenance:
  statement: "literature-derived"
  proof: "ai-altered"
status: "draft"
origin: "pipeline"
proof_strategy: "Jordan–Holder gives the simple basis and additive multiplicities. Restrict to the finite dot orbit, order by positive-root order; M(lambda) has top multiplicity one and other labels strictly lower. Invert a finite unitriangular integral matrix; take direct sum over central characters"
---

## Statement

Fix a finite-dimensional complex semisimple Lie algebra $\mathfrak g$, a Cartan subalgebra $\mathfrak h$, and a positive Borel $\mathfrak b=\mathfrak h\oplus\mathfrak n^+$. Write $Q^+=\sum_i\mathbb Z_{\geq0}\alpha_i$, $\mu\leq\lambda$ when $\lambda-\mu\in Q^+$, and $w\cdot\lambda=w(\lambda+\rho)-\rho$.

The classes $[L(\lambda)]$, and separately the classes $[M(\lambda)]$, form $\mathbb Z$-bases of $K_0(\mathcal O)$. For a fixed finite central-character label set $\Lambda=W\cdot\lambda$, the transition between its standard and simple classes is unitriangular in any linear order extending $\leq$. This remains true on a downward-closed subset of that finite poset. It is not a claim about finite downward ideals of all of $\mathfrak h^*$.

## Facts & Assumptions

**Given:** The setting above and the hypotheses in the statement.

[F1] Fix a finite-dimensional complex semisimple Lie algebra $\mathfrak g$, a Cartan subalgebra $\mathfrak h$, and a positive Borel $\mathfrak b=\mathfrak h\oplus\mathfrak n^+$. Write $Q^+=\sum_i\mathbb Z_{\geq0}\alpha_i$, $\mu\leq\lambda$ when $\lambda-\mu\in Q^+$, and $w\cdot\lambda=w(\lambda+\rho)-\rho$. For the abelian category thm-category-o-is-abelian-and-extension-closed, define $K_0(\mathcal O)$ as the free abelian group on isomorphism classes $[M]$, modulo $[B]=[A]+[C]$ for every short exact sequence $0\to A\to B\to C\to0$. A set of representatives suffices: every finitely generated $U(\mathfrak g)$-module is a quotient of some $U(\mathfrak g)^n$, and those quotients form a set up to isomorphism. Define the formal character by $\operatorname{ch}M=\sum_\mu(\dim M_\mu)e^\mu$. By prop-equivalent-support-description-of-category-o, its integer coefficients are finite and supported in finitely many downward cones. Let $\mathscr R$ be the group of all such integer coefficient families, with pointwise addition. It is a ring with $e^\mu e^\nu=e^{\mu+\nu}$: at a fixed resulting weight, in any pair of cones the equation $\beta+\gamma=\eta$ with $\beta,\gamma\in Q^+$ has finitely many solutions, since every simple-root coefficient is bounded. Taking weight spaces is exact, so character gives a well-defined homomorphism $K_0(\mathcal O)\to\mathscr R$. The zero object's class and character are zero. ([[def-grothendieck-group-and-character-of-category-o]])

[F2] Fix a finite-dimensional complex semisimple Lie algebra $\mathfrak g$, a Cartan subalgebra $\mathfrak h$, and a positive Borel $\mathfrak b=\mathfrak h\oplus\mathfrak n^+$. Write $Q^+=\sum_i\mathbb Z_{\geq0}\alpha_i$, $\mu\leq\lambda$ when $\lambda-\mu\in Q^+$, and $w\cdot\lambda=w(\lambda+\rho)-\rho$. Every object of $\mathcal O$ has a finite composition series and is both Noetherian and Artinian. The length of zero is zero. ([[thm-every-category-o-object-has-finite-length]])

[F3] If an object $A$ in an abelian category has two composition series, then the two series have the same length and the same composition factors up to permutation and isomorphism. ([[thm-jordan-holder-theorem-in-an-abelian-category]])

[F4] Let $\chi_\lambda$ and $\chi_\mu$ be the central characters obtained from highest weights $\lambda$ and $\mu$. Then $$\chi_\lambda=\chi_\mu \quad \text{if and only if} \quad \mu\in W\cdot \lambda,$$ where $W\cdot \lambda:=\{w(\lambda+\rho)-\rho : w\in W\}$. ([[cor-central-characters-are-dot-weyl-orbits]])

[F5] The proper submodule $J(\lambda)$ which is the sum of all proper submodules is the unique maximal submodule of $M(\lambda)$. The quotient $L(\lambda):=M(\lambda)/J(\lambda)$ is simple and is its unique simple quotient. ([[thm-verma-module-has-a-unique-simple-quotient]])

[F6] The weights of $M(\lambda)$ are exactly $\lambda-\beta$ for $\beta\in Q^+$; every weight space is finite dimensional, and $M(\lambda)_\lambda=\mathbb Cv_\lambda$. ([[prop-weights-of-a-verma-module-lie-below-lambda]])

[F7] Fix a finite-dimensional complex semisimple Lie algebra $\mathfrak g$, a Cartan subalgebra $\mathfrak h$, and a positive Borel $\mathfrak b=\mathfrak h\oplus\mathfrak n^+$. Write $Q^+=\sum_i\mathbb Z_{\geq0}\alpha_i$, $\mu\leq\lambda$ when $\lambda-\mu\in Q^+$, and $w\cdot\lambda=w(\lambda+\rho)-\rho$. The simple objects of $\mathcal O$ are exactly the modules $L(\lambda)$, $\lambda\in\mathfrak h^*$, and $L(\lambda)\cong L(\mu)$ if and only if $\lambda=\mu$. Simplicity here excludes zero. ([[thm-simple-objects-of-category-o-are-highest-weight-modules]])

[F8] Every central element acts on a cyclic highest-weight module by a scalar. In particular, each cyclic highest-weight module has a well-defined central character in the sense of def-central-character-of-a-lie-algebra-module. ([[lem-central-action-on-a-cyclic-highest-weight-module-is-scalar]])

## Proof

1.1 Finite length gives $[X]=\sum_\mu[X:L(\mu)][L(\mu)]$ with a finite sum. Multiplicities are well defined by Jordan–Hölder and additive on exact sequences, by concatenating composition series and then applying that theorem. Each multiplicity therefore defines a homomorphism on $K_0$, taking the simple classes to coordinate vectors. This proves spanning and independence of the simple classes. [F7, F1, F2, F3]

2.1 The highest weight of $M(\eta)$ has multiplicity one as a weight and survives in its unique simple quotient. All other simple factor labels $\mu$ satisfy $\mu<\eta$: weightwise additivity and the support formula give $\mu\leq\eta$, while the top weight dimension excludes a second factor with label $\eta$. The scalar central character of a Verma passes to each factor. Hence every such label is in $W\cdot\eta$ by the exact character criterion. Here scalar central action follows directly because the center preserves the one-dimensional highest line and commutes with its cyclic generator action. [F8, F4, F5, F6, algebra, step 1.1]

3.1 On the finite set $\Lambda$, choose a linear extension of the positive-root order. The expansion $[M(\eta)]=[L(\eta)]+\sum_{\mu<\eta}a_{\eta\mu}[L(\mu)]$ has an integral triangular matrix $I+N$ with $N$ strictly triangular. If $r=|\Lambda|$, then $N^r=0$, so the inverse is the finite integral sum $I-N+\cdots+(-N)^{r-1}$. Thus standard classes form a basis of the subgroup on those simple labels. [algebra, step 2.1]

4.1 A downward-closed subset contains every smaller factor label of its standards, so the restricted matrix has the same property; for the empty subset the group and basis are zero and empty. Finally the full label set is partitioned into finite dot orbits. Taking the direct sum of their basis changes proves the global standard basis, with every element still a finite linear combination. [algebra, step 3.1] ∎
