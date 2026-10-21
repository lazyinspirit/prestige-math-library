---
id: ex-lloyd-tie-sensitive-local-minima
kind: example
title: "Tie retention gives distinct Lloyd fixed points"
status: published
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 2
deps:
  - alg-lloyd-k-means
  - def-k-means-objective
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-20
sources:
  references:
    - title: "Hastie, Tibshirani, and Friedman, The Elements of Statistical Learning, 2nd ed., corrected 12th printing, §14.3.5"
      url: "https://drive.google.com/uc?export=download&id=1--Wo5Hcl2y_v3DL-tGgcJHRPdtjiVYjS"
    - title: "Christopher M. Bishop, Pattern Recognition and Machine Learning, §9.1"
      url: "https://www.microsoft.com/en-us/research/wp-content/uploads/2006/01/Bishop-Pattern-Recognition-and-Machine-Learning-2006.pdf"
---

## Example

For the data $x_1=0,x_2=1,x_3=2,x_4=3$ in $\mathbb R$ and $K=2$, use nearest-center initialization with smallest-index initialization ties, retain the current label on later ties, replace each nonempty center by its assigned-data mean, and leave empty centers unchanged. For clusters $C_1,C_2$ and centers $c_1,c_2$, define the cost by $J=\sum_{k=1}^2\sum_{x_i\in C_k}(x_i-c_k)^2$. Initial centers $(0,11/10)$ yield the fixed clusters $\{0\}$ and $\{1,2,3\}$ with centers $(0,2)$ and cost $2$. Initial centers $(3,19/10)$ yield the fixed clusters $\{3\}$ and $\{0,1,2\}$ with centers $(3,1)$ and cost $2$. Initial centers $(1/2,5/2)$ yield the fixed clusters $\{0,1\}$ and $\{2,3\}$ with centers $(1/2,5/2)$ and cost $1$. In the first two runs, the boundary observation is tied between the two updated centers and stays in its current cluster by the retention rule; each output is a fixed point, while the third has lower cost.

## Example references

[[alg-lloyd-k-means]] — initialization, tie retention, empty-center handling, and the stop condition requiring unchanged labels and centers.

[[def-k-means-objective]] — the squared Euclidean within-cluster objective used for the reported values.

## Facts & Assumptions

**Given:** Data $0,1,2,3\in\mathbb R$, two clusters, and the Lloyd rules in the Example.

[F1] [[def-k-means-objective]]: for labels $c_i\in\{1,2\}$ and centers $\mu_1,\mu_2$, the objective is $J=\sum_{i=1}^4(x_i-\mu_{c_i})^2$.

[F2] [[alg-lloyd-k-means]]: initialization selects a nearest center with smallest-index ties; later assignments retain the current label on a tie and otherwise select a nearest center; each nonempty center is replaced by its assigned-data mean; the algorithm stops when both labels and centers are unchanged.

## Proof

1.1 From initial centers $(0,11/10)$, the nearest labels are $(1,2,2,2)$: the respective comparisons are $0<121/100$, $1>1/100$, $4>81/100$, and $9>361/100$. The mean update gives centers $0$ and $(1+2+3)/3=2$. [given, F2, algebra]

1.2 From initial centers $(3,19/10)$, nearest labels are $(2,2,2,1)$: observations $0,1,2$ are strictly nearer $19/10$, while $3$ equals the first center. Their means become $3$ for cluster $1$ and $(0+1+2)/3=1$ for cluster $2$. [F2, algebra]

1.3 From initial centers $(1/2,5/2)$, nearest labels are $(1,1,2,2)$. The means of these clusters are again $1/2$ and $5/2$, so labels and centers are unchanged and the procedure stops. The objective is $4(1/2)^2=1$. [F1, F2, algebra]

2.1 With centers $(0,2)$, observations $0,2,3$ keep labels $1,2,2$ by strict nearest comparisons; observation $1$ is at distance $1$ from each center and retains its current label $2$. The labels remain $(1,2,2,2)$, so their means remain $(0,2)$ and the procedure stops. The objective is $(0-0)^2+(1-2)^2+(2-2)^2+(3-2)^2=2$. [F1, F2, step 1.1, algebra]

2.2 With centers $(3,1)$, observations $0,1,3$ keep labels $2,2,1$ by strict nearest comparisons; observation $2$ is tied at distance $1$ and retains label $2$. The labels stay $(2,2,2,1)$, their means remain $(3,1)$, and the procedure stops. The objective is $(0-1)^2+(1-1)^2+(2-1)^2+(3-3)^2=2$. [F1, F2, step 1.2, algebra]

3.1 The three explicitly computed terminal states have objective values $2,2,1$, respectively, so they are distinct fixed points and the third has strictly lower objective than the first two. In the first and second runs, changing the tied boundary point to the other cluster would change the fixed partition; under the stated rule it remains with its current label. [step 2.1, step 2.2, step 1.3, algebra] ∎


## Diagram

The horizontal coordinate is the observation value. Each row is one run; blue dots are assigned to cluster 1 and red dots to cluster 2. Dashed vertical ticks mark the updated centers, with labels above them. Vertical row placement has no numerical meaning. The diagram records the verified terminal assignments; the proof above establishes them without using the picture.

```tikz
\begin{tikzpicture}[x=1.15cm,y=0.95cm,every node/.style={font=\small}]
  \draw[->] (-0.35,0) -- (3.55,0) node[right] {$x$};
  \foreach \x in {0,1,2,3} {\draw (\x,0.06)--(\x,-0.06) node[below=3pt] {\x};}

\node[left] at (-0.4,3) {run 1}; \draw[blue,dashed] (0,2.68)--(0,3.32) node[above] {$c_1=0$}; \draw[red,dashed] (2,2.68)--(2,3.32) node[above] {$c_2=2$}; \foreach \x in {0} {\fill[blue] (\x,3) circle (2.5pt);} \foreach \x in {1,2,3} {\fill[red] (\x,3) circle (2.5pt);}

\node[left] at (-0.4,2) {run 2}; \draw[blue,dashed] (3,1.68)--(3,2.32) node[above] {$c_1=3$}; \draw[red,dashed] (1,1.68)--(1,2.32) node[above] {$c_2=1$}; \foreach \x in {3} {\fill[blue] (\x,2) circle (2.5pt);} \foreach \x in {0,1,2} {\fill[red] (\x,2) circle (2.5pt);}

  \node[left] at (-0.4,1) {run 3};
  \draw[blue,dashed] (0.5,0.68)--(0.5,1.32) node[above] {$c_1=1/2$};
  \draw[red,dashed] (2.5,0.68)--(2.5,1.32) node[above] {$c_2=5/2$};
  \foreach \x in {0,1} {\fill[blue] (\x,1) circle (2.5pt);}
  \foreach \x in {2,3} {\fill[red] (\x,1) circle (2.5pt);}
\end{tikzpicture}
```
