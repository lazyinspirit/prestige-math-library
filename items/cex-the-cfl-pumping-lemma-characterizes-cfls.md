---
id: cex-the-cfl-pumping-lemma-characterizes-cfls
kind: counterexample
title: "A non-context-free language can still satisfy the Bar-Hillel pumping condition"
status: draft
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: counterexample
deps: [fs-the-cfl-pumping-lemma-characterizes-cfls,
       thm-cfls-are-not-closed-under-intersection,
       thm-cfl-closure-under-union-concatenation-star-and-homomorphism,
       thm-pdas-recognize-exactly-the-cfls]
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "David S. Wise, A Strong Pumping Lemma for Context-Free Languages"
      url: "https://scholarworks.iu.edu/dspace/items/1b886507-5079-4ba7-af17-958f3cf99a1a"
    - title: "Computer Science Stack Exchange, Example of a non-context-free language that nonetheless can be pumped"
      url: "https://cs.stackexchange.com/questions/12041/example-of-a-non-context-free-language-that-nonetheless-can-be-pumped"
    - title: "ROIFE BLOG, [形式语言] 06 Context-free Language"
      url: "https://roife.github.io/posts/formal-languages-and-automata-06/"
---

## Statement refuted

The false statement claims that the ordinary CFL pumping condition
characterizes the context-free languages. Put
$$ K:=\{a^n b^n c^n:n\geq0\},\qquad L:=sK\cup\{s^r q:r\ne1,\ q\in\{a,b,c\}^*\}, $$
where $s$ is a new symbol. The language $L$ is a counterexample.

## Facts & Assumptions

**Given:** The language $L$ displayed above.

[L1] By [[fs-the-cfl-pumping-lemma-characterizes-cfls]], the refuted claim is that satisfying the ordinary pumping condition is equivalent to being context-free.

[L2] The proof of [[thm-cfls-are-not-closed-under-intersection]] establishes
that $K$ is not context free.

[L3] PDA's recognize exactly the context-free languages
([[thm-pdas-recognize-exactly-the-cfls]]), and context-free languages are
closed under homomorphic image
([[thm-cfl-closure-under-union-concatenation-star-and-homomorphism]]).

## Counterexample

**Proof technique:** direct.

1.1 Take pumping length $p:=3$ and write a word of $L$ as $s^r q$. If $r=0$, pump the first letter of $q$; if $r=1$, pump the initial $s$; if $r\ge2$ and $q$ is nonempty, pump its first letter. Taking $w=x=\varepsilon$ gives $|vwx|\le3$, and every pump remains in $L$. [given, cases]

1.2 Suppose $L$ were context free and let $R:=\{sa^i b^j c^k:i,j,k\ge0\}$. A product of a PDA for $L$ from [L3] with a DFA for the regular language $R$ is a PDA for $L\cap R=sK$. The homomorphism deleting $s$ would then make $K$ context free by [L3], contradicting [L2]. [L2, L3, assume-contra, construct, discharge-contradiction]

2.1 If the word is $s^r$ with $r\ge3$, pump $s^3$ when $r=3$ and pump $s^2$ when $r\ge4$. Pumping never leaves exactly one initial $s$, so every pumped word again lies in $L$. Thus $L$ satisfies the ordinary CFL pumping condition. [step 1.1, cases]

3.1 Hence $L$ satisfies ordinary pumping but is not context free, so it refutes the claim in [L1]. [L1, step 2.1, step 1.2] ∎
