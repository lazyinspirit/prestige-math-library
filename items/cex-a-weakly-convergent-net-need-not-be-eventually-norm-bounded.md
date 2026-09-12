---
id: "cex-a-weakly-convergent-net-need-not-be-eventually-norm-bounded"
kind: "counterexample"
title: "A weakly convergent net need not be eventually norm bounded"
deps: ["lem-basic-weak-neighborhoods", "thm-weak-and-norm-topologies-agree-iff-finite-dimensional", "def-weak-convergence-of-nets-and-sequences"]
provenance:
  statement: "ai-altered"
  proof: "ai-altered"
verification:
  audited: 2026-09-13
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-12
sources:
  references:
    - title: "Bühler–Salamon, Functional Analysis (2017); exact harvest in batch coverage"
      url: "https://uomustansiriyah.edu.iq/media/lectures/9/9_2021_09_21!12_02_01_AM.pdf"
    - title: "Teschl, Topics in Real and Functional Analysis (2017); exact harvest in batch coverage"
      url: "https://www.uomustansiriyah.edu.iq/media/lectures/9/9_2018_12_07!10_23_44_AM.pdf"
status: published
origin: "pipeline"
proof_strategy: "direct"
---

## Statement refuted

Every weakly convergent net is eventually norm bounded. In every infinite-dimensional real or complex normed space there is a weakly null net whose norms tend to infinity, without any choice axiom.

## Facts & Assumptions

[F1] Finite-coordinate weak neighborhoods are a zero-neighborhood base ([[lem-basic-weak-neighborhoods]]).

[F2] Every weak zero-neighborhood in infinite dimension is norm unbounded ([[thm-weak-and-norm-topologies-agree-iff-finite-dimensional]]).

[F3] Nets use nonempty directed preorders and weak convergence is neighborhood convergence ([[def-weak-convergence-of-nets-and-sequences]]).

## Counterexample

**Given:** an infinite-dimensional normed space $X$.

1.1 Let $D$ consist of all triples $(U,n,x)$ where $U$ is a weak zero-neighborhood, $n\ge1$ an integer, $x\in U$, and $\|x\|\ge n$. Define $(U,n,x)\preceq(V,m,y)$ if $V\subseteq U$ and $m\ge n$. This is reflexive and transitive. It is nonempty by F2. For two triples, $U\cap V$ is a weak zero-neighborhood and hence contains some $z$ with $\|z\|\ge\max(n,m)$. The triple $(U\cap V,\max(n,m),z)$ is a common upper bound. Thus $D$ is directed; antisymmetry is unnecessary. [given, F1, F2, F3]

2.1 Define the net by $a_{(U,n,x)}=x$, the point already carried in the index. For a weak zero-neighborhood $W$, F2 gives at least one index $(W,1,z)$. Every later index has neighborhood contained in $W$, so its carried point lies in $W$. Hence $a_d\rightharpoonup0$. For any real $R>0$, take an integer $n>R$ and any index with integer coordinate $n$, whose existence follows from F2. Every later index has carried-point norm at least $n>R$. Thus $\|a_d\|\to\infty$, and no tail is bounded. No choice function assigning one point to every neighborhood was used: all admissible points are included in the index set. $\square$ [step 1.1, F2, F3]
